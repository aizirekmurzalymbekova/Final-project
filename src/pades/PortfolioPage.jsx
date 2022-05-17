import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import MyPagination from "../components/MyPagination";
import { clientContext } from "../contexts/ClientContext";
import ProductCard from "../components/ProductCard.jsx";
import FiltersBlock from "../components/FiltersBlock";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const { getProducts, products } = useContext(clientContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <h1>Наши работы</h1>
        <FiltersBlock />
        <div className="products-list">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <br />
        <MyPagination />
      </Container>
    </div>
  );
};

export default PortfolioPage;
