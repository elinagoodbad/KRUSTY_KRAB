import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API_CATEGORIES, API_PRODUCTS } from "../helpers/const";
import { useNavigate } from "react-router-dom";
export const productContext = createContext();
export const useProducts = () => useContext(productContext);
const INIT_STATE = {
  products: [],
  oneProduct: [],
  categories: [],
};
const ProductContextProvider = ({ children }) => {
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
    }
  };

  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //!CREATE
  const createProduct = async (newProduct) => {
    await axios.post(API_PRODUCTS, newProduct);
    navigate("/products");
  };
  //!GET
  const getProducts = async () => {
    const { data } = await axios(`${API_PRODUCTS}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //!DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    getProducts();
  };
  //!GetOneProduct
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  //!EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API_PRODUCTS}/${id}`, editedProduct);
    navigate("/products");
  };
  //!create category
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    navigate("/products");
  };
  //! get category
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
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
