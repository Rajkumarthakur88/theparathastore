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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../store/CartSlice'
import Products from "../components/Products";

const Menu = () => {

  const { products, isLoading } = useSelector(state => state.product)
  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(addToCart())
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <Layout>
      <div className="menu-heading-div"><h1 className="menu-heading">Our Parathas</h1></div>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {
          products.map((item) => <Products product={item} key={item.id} />)
        }
      </Box>
    </Layout>
  );
};

export default Menu;