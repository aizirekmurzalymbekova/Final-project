import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminTable from "../components/AdminTable";
import { adminContext } from "../contexts/AdminContext";

const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProducts, products } = data;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <Link to="/admin-panel/add">
          <Button sx={{ my: 2, color: "gray", display: "block" }}>
            Add product
          </Button>
        </Link>
        <h1>Админ панель</h1>
        <AdminTable products={products} />
      </div>
    </Container>
  );
};

export default AdminPage;
