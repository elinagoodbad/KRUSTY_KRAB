import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const AddCategory = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    dispay: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const [category, setCategoty] = useState("");
  const { createCategory } = useProducts();
  const handleClick = () => {
    if (!category.trim()) {
      alert("Введите данные");
      return;
    }
    const newCategory = {
      name: category,
    };
    setCategoty("");
    createCategory(newCategory);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-title">Add new category</Typography>
          <TextField
            fullWidth
            variant="outlined"
            onChange={(e) => setCategoty(e.target.value)}
          />
          <Button onClick={handleClick}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategory;
