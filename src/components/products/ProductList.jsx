import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import PaginationControlled from "./Pagination";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const { getProducts, products } = useProducts();
  const [page, setPage] = useState(1);

  // Fetch products on component mount and whenever searchParams changes
  useEffect(() => {
    getProducts();
    setPage(1); // Reset to first page when searchParams change
  }, [searchParams]);

  // Number of items per page
  const itemsPerPage = 5;
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const beginIndex = (page - 1) * itemsPerPage;
    const endIndex = beginIndex + itemsPerPage;
    return products.slice(beginIndex, endIndex);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          // justifyContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {currentData().map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PaginationControlled
        page={page}
        count={pageCount}
        handleChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
