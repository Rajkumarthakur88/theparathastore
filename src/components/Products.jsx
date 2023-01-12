import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from '../store/CartSlice'
import { toast } from "react-toastify";

const Products = ({ product }) => {
    const dispatch = useDispatch()

    const handleCart = () => {
        dispatch(addToCart(product))
    }
    
    return (
        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ minHeight: "400px" }}
                    component={"img"}
                    src={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2">{product.description}</Typography>
                    <Typography sx={{ marginTop: "15px", marginLeft: "10px" }} variant="h5"><span style={{ fontSize: "20px" }}>₹</span>{product.price}</Typography>
                    <button className="addtoCart-btn" onClick={() => { handleCart(); }}> Add to Cart</button>
                </CardContent>
            </CardActionArea>
        </Card>


    );
};


export default Products;