import { Button, Container, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";
import "./ProductDetails.css";

const ProductDetailsPage = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails } = data;
  const params = useParams();

  useEffect(() => {
    getProductDetails(params.id);
  }, []);

  if (!productDetails) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container className="product__details">
      <h2>{productDetails.name}</h2>
      <h4>Стиль: {productDetails.style}</h4>
      <h4>Категория: {productDetails.category}</h4>
      <h4>Год реализации проекта: {productDetails.year}</h4>
      <h4>Площадь: {productDetails.square}</h4>
      <p>{productDetails.description}</p>
      <div className="product__details-img">
        {productDetails.image.map((img) => (
          <img src={img} alt="" />
        ))}
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
