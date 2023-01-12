import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';


function Cart() {
    const {cartItems} = useSelector(state => state.cart)
    return (
        <div className='cart'><AddShoppingCartIcon /><span className='cart-length'>{cartItems.length}</span></div>
    )
}

export default Cart