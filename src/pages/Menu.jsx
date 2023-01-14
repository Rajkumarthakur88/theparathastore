import React, { useEffect } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import { fetchProducts } from "../store/MenuSlice";
import CircularProgress from '@mui/material/CircularProgress';
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

  const { products, isLoading, isError } = useSelector(state => state.product)
  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(addToCart())
  }
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (isLoading) {
    <Layout>
    return <Box sx={{ padding: "100px 0px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
    </Layout>
  }
  if (isError) {
    <Layout>
    return <Box sx={{ marginTop: "100px", paddingTop: "100px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
      <h1>Something Went Wrong...</h1>
    </Box>
    </Layout>
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