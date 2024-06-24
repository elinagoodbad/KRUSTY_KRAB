import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../components/HomePage/MainPage";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import ProductPage from "../pages/ProductPage";
import RegistrationPage from "../pages/RegistrationPage";
import CartPage from "../pages/CartPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <MainPage />, id: 1 },
    { link: "/about", element: <AboutPage />, id: 2 },
    { link: "/products", element: <ProductPage />, id: 3 },
    { link: "/admin", element: <AdminPage />, id: 4 },
    { link: "/edit/:id", element: <EditProduct />, id: 5 },
    { link: "/register", element: <RegistrationPage />, id: 6 },
    { link: "/cart", element: <CartPage />, id: 7 },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
