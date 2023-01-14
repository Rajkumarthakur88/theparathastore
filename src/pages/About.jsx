import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To The Paratha Store</Typography>
        <p>
         Welcome to the Paratha Store. Here You will get all types of parathas like aalo paratha, cheese paratha, plain paratha and many more varities of parathas on affordable price. So Order Now  
        </p>
      </Box>
    </Layout>
  );
};

export default About;