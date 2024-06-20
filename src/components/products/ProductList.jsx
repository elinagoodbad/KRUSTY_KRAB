import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import PaginationControlled from "./Pagination";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  const { getProducts, products } = useProducts();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProducts();
    setPage(1);
  }, []);
  console.log(products);
  // кол-во продуктов  на 1 стр
  const itemPerPage = 6;
  // общее кол-вл стр
  const count = Math.ceil(products.length / itemPerPage);
  console.log(count);
  const currentData = () => {
    const beginIndex = (page - 1) * itemPerPage;
    const endIndex = beginIndex + itemPerPage;
    return products.slice(beginIndex, endIndex);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PaginationControlled
        page={page}
        count={count}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
