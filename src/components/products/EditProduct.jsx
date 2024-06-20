import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";

const EditProduct = () => {
  // const navigate = useNavigate();
  const { id } = useParams();
  const { oneProduct, getOneProduct, editProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  const [product, setProduct] = useState({
    title: "",
    desctiption: "",
    price: 0,
    image: "",
  });
  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  const handleInput = (e) => {
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
    editProduct(id, product);
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
        EDIT PRODUCT
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="title"
        variant="outlined"
        onChange={handleInput}
        value={product.title}
      />
      <TextField
        name="desctiption"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
        value={product.desctiption}
      />
      <TextField
        name="image"
        fullWidth
        label="image"
        variant="outlined"
        onChange={handleInput}
        value={product.image}
      />
      <TextField
        name="price"
        fullWidth
        label="price"
        variant="outlined"
        onChange={handleInput}
        value={product.price}
      />
      {/* onClick={() => navigate(`/edit/${id}`)} */}
      <Button onClick={handleClick} fullWidth variant="contained">
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
