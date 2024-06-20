import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/HomePage/MainPage";
import ProductPage from "../pages/ProductPage";
import EditProduct from "../components/products/EditProduct";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <MainPage /> },
    { id: 2, link: "/product", element: <ProductPage /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    // { id: 4, link: "/about", element: <AboutPage /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route key={elem.id} path={elem.link} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
