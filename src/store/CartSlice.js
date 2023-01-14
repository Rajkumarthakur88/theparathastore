import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalAmount: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("Product Already Added", {
                    autoClose: 600, position: "top-center"
                })
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name}" Added To Cart"`, {
                    autoClose: 600, position: "top-center"
                })
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        },
        removeItem(state, action) {
            const remove = state.cartItems.filter((item) => item.id !== action.payload)
            state.cartItems = remove
            toast.error(` Remove From Cart"`, {
                autoClose: 600, position: "top-center"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const remove = state.cartItems.filter((item) => item.id !== action.payload)
                state.cartItems = remove
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
        },
        increaseQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (state.cartItems[itemIndex].cartQuantity >= 1) {
                state.cartItems[itemIndex].cartQuantity += 1;
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }
            // else if (state.cartItems[itemIndex].cartQuantity === 1) {
            //     const remove = state.cartItems.filter((item) => item.id !== action.payload)
            //     state.cartItems = remove

            // }
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;
                cartTotal.total = cartTotal.total + itemTotal;
                return cartTotal
            },
                {
                    total: 0, quantity: 0
                })
            state.cartTotalAmount = total;
        }
    },
})

export const { addToCart, removeItem, decreaseQuantity, increaseQuantity, getTotal } = CartSlice.actions
export default CartSlice.reducer