import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CreditCardForm from "./components/CreditCardForm";
import NavBar from "./components/Navbar";
import AddPage from "./pades/AddPage";
import AdminPage from "./pades/AdminPage";
import CartPage from "./pades/CartPage";
import ContactsPage from "./pades/ContactsPage";
import EditPage from "./pades/EditPage";
import FavPage from "./pades/FavPage";
import Form from "./pades/Form";
import MainPage from "./pades/MainPage";
import PortfolioPage from "./pades/PortfolioPage";
import PricePage from "./pades/PricePage";
import ProductDetailsPage from "./pades/ProductDetailsPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/fav" element={<FavPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/add" element={<AddPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
