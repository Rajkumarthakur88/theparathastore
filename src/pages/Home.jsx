import React, { useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import Menu from "./Menu";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/MenuSlice";



const Home = () => {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [])


  return (
    <>

      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>The Paratha Store</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
      <Menu />

    </>
  );
};

export default Home;