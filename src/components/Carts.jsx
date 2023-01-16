import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import CardActions from '@mui/material/CardActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { shadows } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NoCart from '../images/empty-cart.png'
import { addToCart, removeItem, decreaseQuantity, increaseQuantity, getTotal } from "../store/CartSlice";

import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

function Carts() {

    const { cartItems, cartTotalAmount } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [addon, setAddon] = useState()
    const [distance, setDistance] = useState()

    const handleDecrease = (value) => {
        dispatch(decreaseQuantity(value))
    }
    const handleIncrease = (value) => {
        dispatch(increaseQuantity(value))
    }

    useEffect(() => {
        setAddon(0)
        setDistance(0)
    }, [])
    useEffect(() => {
        dispatch(getTotal())
    }, [Carts ,cartItems])

    const TotalPrice = parseInt(cartTotalAmount) + parseInt(addon) + parseInt(distance)

    const RemoveItem = (id) => {
        dispatch(removeItem(id)) 
    }

    if (cartItems.length === 0) {
        return <Layout> <div className="noitem-cart"><img src={NoCart} alt="" /><h2>No Items in Your Cart</h2> </div></Layout>
    }

    return (
        <>
            <Layout>
                <div className="cart-buying-div">
                    <Card sx={{ width: 400, maxWidth: 500, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", boxShadow: 10 }}>

                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div" sx={{ color: "goldenrod", boxShadow: 5, p: 1, textAlign: "center", fontWeight: "700" }}>
                                Cart Items
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ boxShadow: 5, p: 1 }}>
                                Total Items : {cartItems.length}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div" sx={{ boxShadow: 5, p: 1, width: 300 }}>
                                Total Price: ₹{TotalPrice}
                            </Typography>
                        </CardContent>

                        <Card sx={{ display: "flex" }}>

                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-filled-label">Add-ons</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled">
                                    <MenuItem value={0}>
                                        <Button onClick={() => setAddon(0)}>
                                            <em>None</em>
                                        </Button>
                                    </MenuItem>
                                    <MenuItem value={5}> <Button onClick={() => setAddon(5)}> Extra Sauce (₹5)</Button> </MenuItem>
                                    <MenuItem value={15}> <Button onClick={() => setAddon(15)}> Yogurt (₹15)</Button>  </MenuItem>
                                    <MenuItem value={10}> <Button onClick={() => setAddon(10)}> Corn (₹10)</Button> </MenuItem>
                                    <MenuItem value={15}> <Button onClick={() => setAddon(15)}>Cabbage (₹15)</Button>  </MenuItem>
                                    <MenuItem value={10}> <Button onClick={() => setAddon(10)}>Fenugreek (₹10)</Button>  </MenuItem>
                                    <MenuItem value={20}> <Button onClick={() => setAddon(20)}> Extra Cheese (₹20)</Button>  </MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-filled-label">Distance</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                >
                                    
                                    <MenuItem value={0}> <Button onClick={() => setDistance(0)}>Upto 5 km (₹0)</Button>  </MenuItem>
                                    <MenuItem value={15}><Button onClick={() => setDistance(15)}> 5-8 km (₹15)</Button> </MenuItem>
                                    <MenuItem value={25}><Button onClick={() => setDistance(25)}> 9-15 km (₹25)</Button></MenuItem>
                                    <MenuItem value={40}><Button onClick={() => setDistance(40)}> Above 15 km (₹40)</Button></MenuItem>
                                </Select>
                            </FormControl>

                        </Card>
                        <CardActions sx={{ marginTop: "15px", marginBottom: "10px" }} >
                            <Button sx={{ marginRight: "20px" }} variant={"contained"} color="success" size="large">Procced to Buy</Button>
                        </CardActions>
                    </Card>
                </div>

                <div className="menu-heading-div"><h1 className="menu-heading">Cart Items</h1></div>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    {cartItems.map((cart) => (
                        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ minHeight: "400px" }}
                                    component={"img"}
                                    src={cart.image}
                                    alt={cart.name}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom component={"div"}>
                                        {cart.name}
                                    </Typography>
                                    <Typography variant="body2">{cart.description}</Typography>

                                    <div className="incre-decre">
                                        <Button onClick={() => handleDecrease(cart)}> <RemoveIcon /> </Button>
                                        <span>{cart.cartQuantity}</span>
                                        <Button onClick={() => handleIncrease(cart)} > <AddIcon /> </Button>
                                    </div>

                                    <button className="removetoCart-btn" onClick={() => RemoveItem(cart.id)}>Remove Item</button>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>

            </Layout>
        </>
    )
}

export default Carts