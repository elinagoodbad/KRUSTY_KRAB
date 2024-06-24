import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContextProvider";
import Detail from "./Detail";
import { AddShoppingCart } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";

const ProductCard = ({ elem }) => {
  const { addProductToCart, checkProductInCart, deleteProductFromCart } =
    useCart();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { deleteProduct } = useProducts();
  const handleDelete = () => {
    deleteProduct(elem.id);
    deleteProductFromCart(elem.id);
  };
  return (
    <Card
      sx={{
        border: "4px solid #FFD700",
        height: 450,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        margin: "25px",
        width: { md: "20vw", lg: "15vw" },
        borderRadius: "15px",
        background: "#87CEEB",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          sx={{
            height: 200,
            borderRadius: "15px 15px 0 0",
            border: "2px solid #FFD700",
            objectFit: "cover",
          }}
          image={elem.image}
        />
      </CardActionArea>
      <CardContent
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          fontSize="20px"
          fontWeight="700"
          component="div"
          color="#333"
          sx={{ marginBottom: "10px", textAlign: "center" }}
        >
          {elem.title}
        </Typography>

        <Typography
          color="#FF4500"
          fontSize="24px"
          fontWeight="800"
          sx={{ textAlign: "center" }}
        >
          {elem.price}$
        </Typography>

        <Button
          color="secondary"
          variant="outlined"
          size="medium"
          onClick={handleDelete}
          sx={{
            borderColor: "#FF4500",
            color: "#FF4500",
            mt: 2,
            "&:hover": {
              borderColor: "#FF6347",
              color: "#FF6347",
              fontFamily: "'Amatic SC', cursive",
            },
          }}
        >
          Delete
        </Button>

        <Button
          onClick={() => navigate(`/edit/${elem.id}`)}
          color="primary"
          variant="outlined"
          size="medium"
          sx={{
            borderColor: "#FFD700",
            color: "#FFD700",
            mt: 1,
            "&:hover": {
              borderColor: "#FFA500",
              color: "#FFA500",
              fontFamily: "'Amatic SC', cursive",
            },
          }}
        >
          Edit
        </Button>
        <IconButton
          sx={{
            marginTop: "15px",
            backgroundColor: checkProductInCart(elem.id) ? "yellow" : "",
            color: checkProductInCart(elem.id) ? "black" : "",
          }}
          onClick={() => addProductToCart(elem)}
        >
          <AddShoppingCart sx={{}} />
        </IconButton>
      </CardContent>
      <Detail elem={elem} open={open} handleClose={handleClose} />
    </Card>
  );
};

export default ProductCard;
