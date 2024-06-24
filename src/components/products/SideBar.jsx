import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useProducts } from "../../context/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "20px auto",
        width: "300px",
        backgroundColor: "#f4d742", // Желтый фон
        fontFamily: "'Comic Sans MS', cursive, sans-serif", // Шрифт "Спанч Боба"
        borderRadius: "10px", // Круглые углы
        boxShadow: "0px 3px 5px rgba(0,0,0,0.2)", // Тень
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          position: "relative",
          backgroundColor: "#fff", // Белый фон
          borderRadius: "5px", // Круглые углы
        }}
      >
        <IconButton
          sx={{ p: "10px", marginRight: "10px", color: "#f4d742" }} // Желтая иконка меню
          aria-label="menu"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: "#f4d742", // Желтый текст
            fontFamily: "'Comic Sans MS', cursive, sans-serif", // Шрифт "Спанч Боба"
          }}
          placeholder="Search..."
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton
          type="button"
          sx={{ p: "10px", color: "#f4d742" }} // Желтая иконка поиска
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>

      {menuOpen && (
        <FormControl sx={{ mt: 2 }}>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              color: "black", // Желтый текст
              fontFamily: "'Comic Sans MS', cursive, sans-serif", // Шрифт "Спанч Боба"
            }}
          >
            Category
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="all"
            name="radio-buttons-group"
            onChange={(e) => {
              fetchByParams("category", e.target.value);
              setSearchParams({
                ...searchParams,
                category: e.target.value,
              });
            }}
          >
            {categories.map((elem) => (
              <FormControlLabel
                key={elem.id}
                value={elem.name}
                label={elem.name}
                control={<Radio sx={{ color: "black" }} />} // Желтая радио кнопка
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </Paper>
  );
};

export default SideBar;
