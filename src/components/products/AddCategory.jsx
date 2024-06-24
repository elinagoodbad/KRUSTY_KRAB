import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const { createCategory } = useProducts();

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
        width: "100%",
        padding: 2,
        border: "1px solid black",
        borderRadius: 1,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" align="center" fontFamily="'Amatic SC', cursive">
        Add new category
      </Typography>
      <TextField
        fullWidth
        label="Category Name"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button onClick={handleClick} fullWidth variant="contained">
        Add Category
      </Button>
    </Box>
  );
};

export default AddCategory;
