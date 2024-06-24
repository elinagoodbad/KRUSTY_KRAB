import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
  IconButton,
} from "@mui/material";

import React, { useEffect } from "react";
import { useCart } from "../context/CartContextProvider";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Cart.css"; // Importing custom CSS for additional styling

const theme = createTheme({
  typography: {
    fontFamily: "Patrick Hand, Arial",
  },
  palette: {
    primary: {
      main: "#FFD700", // SpongeBob yellow
    },
    secondary: {
      main: "#87CEEB", // Light blue
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFD700",
          color: "#000",
          "&:hover": {
            backgroundColor: "#FFC700",
          },
          borderRadius: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
          textTransform: "none",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: "#87CEEB",
          color: "#FFD700",
          fontWeight: "bold",
          fontSize: "16px",
          borderBottom: "3px solid #FFD700",
        },
        body: {
          fontSize: "14px",
          color: "#000",
          borderBottom: "2px solid #FFD700",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        },
      },
    },
  },
});

const Cart = () => {
  const { cart, changeProductCount, deleteProductFromCart, getCart } =
    useCart();
  useEffect(() => {
    getCart();
  }, []);

  console.log(cart);

  return (
    <ThemeProvider theme={theme}>
      <div className="cart-container">
        <TableContainer component={Paper} className="cart-table-container">
          <Table aria-label="simple table" sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Picture</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Count</TableCell>
                <TableCell>SubPrice</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map((elem) => (
                <TableRow
                  key={elem.item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img
                      className="cart-image"
                      src={elem.item.image}
                      alt=""
                      width={70}
                    />
                  </TableCell>
                  <TableCell>{elem.item.title}</TableCell>
                  <TableCell>{elem.item.category}</TableCell>
                  <TableCell>{elem.item.price}$</TableCell>
                  <TableCell>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      defaultValue={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                      className="cart-input"
                    />
                  </TableCell>
                  <TableCell>{elem.subPrice}$</TableCell>
                  <TableCell>
                    <Button onClick={() => deleteProductFromCart(elem.item.id)}>
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          sx={{
            marginTop: "30px",
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            fontFamily: "Patrick Hand, Arial",
          }}
        >
          BUY NOW FOR {cart.totalPrice}$
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Cart;
