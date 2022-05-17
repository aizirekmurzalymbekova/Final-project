import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { API, newAPI, servicesAPI, formAPI } from "../helpers/const";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { db } from "@firebase/firestore";

export const clientContext = React.createContext();

const initState = {
  products: [],
  feedbacks: [],
  services: [],
  form: [],
  favCount: JSON.parse(localStorage.getItem("fav"))
    ? JSON.parse(localStorage.getItem("fav")).products.length
    : 0,
  cartCount: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart")).services.length
    : 0,
  myFav: null,
  productDetails: null,
  user: null,
  myCart: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_TO_FAV":
      return { ...state, favCount: action.payload };
    case "DELETE_PRODUCT_IN_FAV":
      return { ...state, favCount: action.payload };
    case "GET_PRODUCTS_FROM_FAV":
      return { ...state, myFav: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    case "CHECK_USER":
      return { ...state, user: action.payload };
    case "GET_FEEDBACK":
      return { ...state, feedbacks: action.payload };
    case "GET_SERVICES":
      return { ...state, services: action.payload };
    case "ADD_SERVICE_TO_CART":
      return { ...state, cartCount: action.payload };
    case "DELETE_SERVICE_IN_CART":
      return { ...state, cartCount: action.payload };
    case "GET_SERVICE_FROM_CART":
      return { ...state, myCart: action.payload };
    default:
      return state;
  }
};

const ClientContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const getProducts = async () => {
    const search = window.location.search;
    const response = await axios.get(`${API}${search}`);
    const action = {
      type: "GET_PRODUCTS",
      payload: response.data,
    };
    dispatch(action);
  };

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = currentPage * productsPerPage - productsPerPage;
  const products = state.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalCount = state.products.length;

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  const addProductToFav = (product) => {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        products: [],
      };
    }
    const newProduct = {
      product: product,
      count: 1,
    };

    fav.products.push(newProduct);
    localStorage.setItem("fav", JSON.stringify(fav));

    const action = {
      type: "ADD_PRODUCT_TO_FAV",
      payload: fav.products.length,
    };
    dispatch(action);
  };

  const checkProductInFav = (id) => {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      return false;
    }
    let prod = fav.products.find((item) => {
      return item.product.id === id;
    });
    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteProductInFav = (id) => {
    let fav = JSON.parse(localStorage.getItem("fav"));
    let newProducts = fav.products.filter((item) => {
      return item.product.id !== id;
    });
    fav.products = newProducts;
    localStorage.setItem("fav", JSON.stringify(fav));
    const action = {
      type: "DELETE_PRODUCT_IN_FAV",
      payload: fav.products.length,
    };
    dispatch(action);
  };

  const getProductsFromFav = () => {
    const fav = JSON.parse(localStorage.getItem("fav")) || { products: [] };
    const action = {
      type: "GET_PRODUCTS_FROM_FAV",
      payload: fav,
    };
    dispatch(action);
  };

  const getProductDetails = async (id) => {
    const response = await axios(`${API}/${id}`);

    const action = {
      type: "GET_PRODUCT_DETAILS",
      payload: response.data,
    };
    dispatch(action);
    console.log(id);
  };

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const action = {
        type: "CHECK_USER",
        payload: user,
      };
      dispatch(action);
    });
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const addFeedback = async (newFeedback) => {
    await axios.post(newAPI, newFeedback);
  };

  const getFeedback = async () => {
    const response = await axios(newAPI);
    let action = {
      type: "GET_FEEDBACK",
      payload: response.data,
    };
    dispatch(action);
  };

  const delFeedback = async (id) => {
    await axios.delete(`${newAPI}/${id}`);
    getFeedback();
  };

  const getServices = async () => {
    const response = await axios.get(servicesAPI);
    const action = {
      type: "GET_SERVICES",
      payload: response.data,
    };
    dispatch(action);
  };

  const addServiceToCart = (service) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        services: [],
        totalPrice: 0,
      };
    }
    const newService = {
      service,
      count: 1,
      subPrice: 0,
    };

    newService.subPrice = service.price * newService.count;
    cart.services.push(newService);
    cart.totalPrice = cart.services.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));

    const action = {
      type: "ADD_SERVICE_TO_CART",
      payload: cart.services.length,
    };
    dispatch(action);
  };
  const checkServiceInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      return false;
    }
    let prod = cart.services.find((item) => {
      return item.service.id === id;
    });
    if (prod) {
      return true;
    } else {
      return false;
    }
  };

  const deleteServiceInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let newServices = cart.services.filter((item) => {
      return item.service.id !== id;
    });
    cart.services = newServices;
    cart.totalPrice = cart.services.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    const action = {
      type: "DELETE_SERVICE_IN_CART",
      payload: cart.services.length,
    };
    dispatch(action);
  };

  const getServicesFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { services: [] };
    const action = {
      type: "GET_SERVICE_FROM_CART",
      payload: cart,
    };
    dispatch(action);
  };

  const changeCountServiceInCart = (id, count) => {
    if (count < 1) {
      return;
    }
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.services = cart.services.map((item) => {
      if (item.service.id === id) {
        item.count = count;
        item.subPrice = item.count * item.service.price;
      }
      return item;
    });
    cart.totalPrice = cart.services.reduce((prev, next) => {
      return prev + next.subPrice;
    }, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    getServicesFromCart();
  };

  const addForm = async (newForm) => {
    await axios.post(formAPI, newForm);
  };

  return (
    <clientContext.Provider
      value={{
        getProducts: getProducts,
        handlePagination: handlePagination,
        addProductToFav: addProductToFav,
        checkProductInFav: checkProductInFav,
        deleteProductInFav: deleteProductInFav,
        getProductsFromFav: getProductsFromFav,
        getProductDetails: getProductDetails,
        authWithGoogle: authWithGoogle,
        logOut: logOut,
        addFeedback: addFeedback,
        getFeedback: getFeedback,
        delFeedback: delFeedback,
        getServices: getServices,
        addForm: addForm,
        addServiceToCart,
        checkServiceInCart,
        deleteServiceInCart,
        getServicesFromCart,
        changeCountServiceInCart,
        services: state.services,
        form: state.form,
        feedbacks: state.feedbacks,
        products: products,
        totalCount: totalCount,
        productsPerPage: productsPerPage,
        favCount: state.favCount,
        myFav: state.myFav,
        productDetails: state.productDetails,
        user: state.user,
        myCart: state.myCart,
      }}
    >
      {props.children}
    </clientContext.Provider>
  );
};

export default ClientContext;
