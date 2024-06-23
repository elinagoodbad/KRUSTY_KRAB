import React, { useState } from "react";
import AddCategory from "../components/products/AddCategory";
import AddProduct from "../components/products/AddProduct";
import "./AdminPage.css";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        backgroundImage:
          "https://androidow.com/uploads/posts/2023-04/gubka-bob-na-kuhne_1.jpg",
      }}
    >
      {/* <button onClick={handleOpen}>Add category</button> */}
      <AddProduct />
      <AddCategory />
      {/* open={open} handleClose={handleClose} */}
    </div>
  );
};

export default AdminPage;
