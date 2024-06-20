import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const CategorySelect = ({ handleInput }) => {
  const { categories, getCategories } = useProducts();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Box sx={{ minWidth: "120" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          onChange={handleInput}
          name="category"
        >
          {categories.map((elem) => (
            <MenuItem key={elem.id} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelect;
