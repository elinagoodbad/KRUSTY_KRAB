import React from "react";
import SideBar from "../components/products/SideBar";
import ProductList from "../components/products/ProductList";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "300", flex: "none" }}>
        <SideBar />
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
