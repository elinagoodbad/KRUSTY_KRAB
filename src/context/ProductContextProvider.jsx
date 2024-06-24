import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API_CATEGORIES, API_MENU, API_PRODUCTS } from "../helpers/const";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  oneProduct: [],
  categories: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //!CREATE
  const createProduct = async (newProduct) => {
    try {
      await axios.post(API_MENU, newProduct);
      navigate("/products");
    } catch (error) {
      console.error("Failed to create product:", error);
    }
  };

  //!GET
  const getProducts = async () => {
    try {
      const { data } = await axios(`${API_MENU}${window.location.search}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    } catch (error) {
      console.error("Failed to get products:", error);
    }
  };

  //!DELETE
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_MENU}/${id}`);
      getProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  //!GetOneProduct
  const getOneProduct = async (id) => {
    try {
      const { data } = await axios(`${API_MENU}/${id}`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: data,
      });
    } catch (error) {
      console.error("Failed to get product:", error);
    }
  };

  //!EDIT
  const editProduct = async (id, editedProduct) => {
    try {
      await axios.patch(`${API_MENU}/${id}`, editedProduct);
      navigate("/products");
    } catch (error) {
      console.error("Failed to edit product:", error);
    }
  };

  //!create category
  const createCategory = async (newCategory) => {
    try {
      await axios.post(API_CATEGORIES, newCategory);
      navigate("/products");
    } catch (error) {
      console.error("Failed to create category:", error);
    }
  };

  //! get category
  const getCategories = async () => {
    try {
      const { data } = await axios(API_CATEGORIES);
      dispatch({
        type: "GET_CATEGORIES",
        payload: data,
      });
    } catch (error) {
      console.error("Failed to get categories:", error);
    }
  };

  //! filter
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };

  const values = {
    createProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    createCategory,
    getCategories,
    categories: state.categories,
    fetchByParams,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
