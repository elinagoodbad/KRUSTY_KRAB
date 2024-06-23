import { Box, Button, Modal } from "@mui/material";
import React from "react";
import { useCart } from "../../context/CartContextProvaider";

const Detail = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "30%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <div>
          <img width={300} src="" alt="" />
        </div>
        <div>
          <h1></h1>
          <p></p>
          <p></p>
        </div>
        <div style={{ marginTop: "auto" }}></div>
      </Box>
    </Modal>
  );
};

export default Detail;
