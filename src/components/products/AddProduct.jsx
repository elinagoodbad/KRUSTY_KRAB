import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import CategorySelect from "./CategorySelect";

const AddProduct = () => {
  const { createProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
  });

  const handleInput = (e) => {
    if (e.target.name === "price") {
      setProduct({ ...product, [e.target.name]: Number(e.target.value) });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const handleClick = () => {
    createProduct(product);
  };

  return (
    <Box
      sx={{
        width: "45%",
        padding: 2,
        border: "1px solid black",
        borderRadius: 1,
        margin: "50px",
        backgroundColor: "#ADE8FE",
        color: "#01263a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: "28px",
        float: "left",
      }}
    >
      <Typography variant="h5" align="center">
        Add new product
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
        sx={{ marginBottom: 2, backgroundColor: "#FFD166" }}
      />

      <TextField
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
        onChange={handleInput}
        sx={{ marginBottom: 2, backgroundColor: "#FFD166" }}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        onChange={handleInput}
        sx={{ marginBottom: 2, backgroundColor: "#FFD166" }}
      />
      <CategorySelect handleInput={handleInput} />
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        color="warning"
      >
        Add Product
      </Button>
    </Box>
  );
};

export default AddProduct;
