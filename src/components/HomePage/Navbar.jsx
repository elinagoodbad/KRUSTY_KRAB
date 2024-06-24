import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Badge, MenuItem } from "@mui/material";

import AnchorIcon from "@mui/icons-material/Anchor";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../context/CartContextProvider";
import { getProductsCountInCart } from "../../helpers/function";
const Navbar = () => {
  const { cart, changeProductCount, deleteProductFromCart, getCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [badgeCount, setBadgeCount] = React.useState(0);
  const { addProductToCart } = useCart();
  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart);
  }, [addProductToCart]);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAdminClick = () => {
    navigate("/admin");
    handleCloseNavMenu();
  };

  const pages = [
    { id: 1, title: "Products", link: "/products" },
    { id: 2, title: "About", link: "/about" },
  ];
  const handleSpongeBobClick = () => {
    navigate("/register");
  };
  return (
    <AppBar
      style={{
        backgroundColor: "#4f94d4",
        color: "#01263a",
        border: "5px solid black",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AnchorIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Amatic SC, cursive",
              fontWeight: 700,
              fontSize: 40,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KRUSTY KRAB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Amatic SC, cursive",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KRUSTY KRAB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.id}
                to={page.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              </Link>
            ))}
          </Box>

          <MenuItem onClick={handleAdminClick}>
            <Avatar
              sx={{ border: "2px solid black", marginRight: "30px" }}
              alt="Remy Sharp"
              src="https://www.spongebobshop.com/cdn/shop/products/Viacom_Spongebob_Printful_Cut_26SewTshirt_00706_ImageRO_grande.jpg?v=1569270887"
            />
          </MenuItem>

          <MenuItem onClick={handleSpongeBobClick}>
            <Avatar
              sx={{ border: "2px solid black" }}
              alt="Remy Sharp"
              src="https://i.pinimg.com/736x/18/30/83/183083336ce6c7bf83b9ea3ecb076adb.jpg"
            />
          </MenuItem>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Link to="/cart">
            <IconButton aria-label="cart">
              {/* {cart.products.length} */}
              <Badge badgeContent={cart.products.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
