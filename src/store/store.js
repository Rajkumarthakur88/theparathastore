import { configureStore } from "@reduxjs/toolkit"
import CartReducer from "./CartSlice"
import MenuReducer from "./MenuSlice"


const store = configureStore({
    reducer: {
        cart: CartReducer,
        product: MenuReducer
    }
})

export default store