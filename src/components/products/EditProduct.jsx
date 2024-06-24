import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { id } = useParams();
  const { oneProduct, getOneProduct, editProduct } = useProducts();

  useEffect(() => {
    getOneProduct(id);
  }, [id, getOneProduct]);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleClick = () => {
    editProduct(id, product);
  };

  return (
    <Box
      sx={{
        width: "50vw",
        height: "auto",
        margin: "20px auto",
        marginTop: "100px",
        padding: "20px",
        backgroundColor: "#fec001",
        backgroundImage: "linear-gradient(315deg, #fec001 0%, #ec8800 74%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "2px solid #f98f00",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          marginBottom: "20px",
          color: "#01263a",
          fontFamily: "'Amatic SC', cursive",
          letterSpacing: "0.3rem",
        }}
      >
        EDIT PRODUCT
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        sx={{ marginBottom: "15px" }}
        InputProps={{
          sx: {
            backgroundColor: "white",
            borderRadius: "5px",
          },
        }}
        onChange={handleInput}
        value={product.title}
      />
      <TextField
        name="description"
        fullWidth
        label="Description"
        variant="outlined"
        sx={{ marginBottom: "15px" }}
        InputProps={{
          sx: {
            backgroundColor: "white",
            borderRadius: "5px",
          },
        }}
        onChange={handleInput}
        value={product.description}
      />
      <TextField
        name="image"
        fullWidth
        label="Image URL"
        variant="outlined"
        sx={{ marginBottom: "15px" }}
        InputProps={{
          sx: {
            backgroundColor: "white",
            borderRadius: "5px",
          },
        }}
        onChange={handleInput}
        value={product.image}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        type="number"
        variant="outlined"
        sx={{ marginBottom: "20px" }}
        InputProps={{
          sx: {
            backgroundColor: "white",
            borderRadius: "5px",
          },
        }}
        onChange={handleInput}
        value={product.price}
      />
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#01263a",
          color: "white",
          "&:hover": { backgroundColor: "#f98f00" },
        }}
      >
        UPDATE PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
