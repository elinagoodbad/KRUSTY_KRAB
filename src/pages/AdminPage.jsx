import React, { useState } from "react";
import AddCategory from "../components/products/AddCategory";
import AddProduct from "../components/products/AddProduct";
import "./AdminPage.css"; // Импортируем стили

const AdminPage = () => {
  return (
    <div className="admin-page-container">
      <h1 className="admin-page-title">ADMIN PAGE</h1>
      <div className="add-product-category">
        <AddProduct />
        <AddCategory />
      </div>
    </div>
  );
};

export default AdminPage;
