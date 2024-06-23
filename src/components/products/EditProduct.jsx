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
        width: "45%",
        height: 450,
        margin: "100px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#D0F4DE",
        gap: "2",
        border: "1px solid black",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT PRODUCT
      </Typography>
      <TextField
        name="title"
        fullWidth
        label="Title"
        variant="outlined"
        onChange={handleInput}
        value={product.title}
        sx={{ marginBottom: 2, backgroundColor: "#80ED99" }}
      />
      <TextField
        name="desctiption"
        fullWidth
        label="Description"
        variant="outlined"
        onChange={handleInput}
        value={product.desctiption}
        sx={{ marginBottom: 2, backgroundColor: "#80ED99" }}
      />
      <TextField
        name="image"
        fullWidth
        label="Image"
        variant="outlined"
        onChange={handleInput}
        value={product.image}
        sx={{ marginBottom: 2, backgroundColor: "#80ED99" }}
      />
      <TextField
        name="price"
        fullWidth
        label="Price"
        variant="outlined"
        onChange={handleInput}
        value={product.price}
        sx={{ marginBottom: 2, backgroundColor: "#80ED99" }}
      />
      {/* onClick={() => navigate(`/edit/${id}`)} */}
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        color="success"
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default EditProduct;
