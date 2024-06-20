import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { createProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    desctiption: "",
    price: 0,
    image: "",
    category: "",
  });

  const handleInput = (e) => {
    // console.log(e.target);
    if (e.target.name === "price") {
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    createProduct(product);
  };
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="title"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="desctiption"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="image"
        fullWidth
        label="image"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        name="price"
        fullWidth
        label="price"
        variant="outlined"
        onChange={handleInput}
      />
      <CategorySelect handleInput={handleInput} />
      <Button onClick={handleClick} fullWidth variant="contained">
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
