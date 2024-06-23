import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const { createCategory } = useProducts();
  const style = {
    position: "absolute",
    top: "30%",
    lest: "30%",
    width: 700,
    display: "flex",
    border: "2px sollid black",
    boxChadox: 24,
    bgcolor: "background.paper",
    p: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const handleClick = () => {
    if (!category.trim()) {
      alert("Введите данные");
      return;
    }
    const newCategory = {
      name: category,
    };
    setCategory("");
    createCategory(newCategory);
  };

  return (
    <Box
      sx={{
        width: "40%",
        padding: 2,
        border: "1px solid black",
        borderRadius: 1,
        margin: "50px 2%",
        backgroundColor: "#FFC8DD",
        color: "#01263a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        top: "263px",
      }}
    >
      <Typography variant="h5" align="center">
        Add new category
      </Typography>
      <TextField
        fullWidth
        label="Category Name"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ marginBottom: "16px", backgroundColor: "#A2D2FF" }}
      />
      <Button
        onClick={handleClick}
        fullWidth
        variant="contained"
        color="primary"
      >
        Add Category
      </Button>
    </Box>
  );
};

export default AddCategory;
