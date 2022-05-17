import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Avatar, Badge, Button } from "@mui/material";
import { clientContext } from "../contexts/ClientContext";
import { Logout, ShoppingCart } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const { authWithGoogle, user, logOut, cartCount } =
    React.useContext(clientContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        className="appbar"
        style={{ backgroundColor: "black" }}
      >
        <Toolbar className="navbar">
          <Link to="/">
            <Button
              size="small"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Главная
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Портфолио
            </Button>
          </Link>
          <Link to="/price">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Цены и услуги
            </Button>
          </Link>
          <Link to="/contacts">
            <Button id="g" sx={{ my: 2, color: "white", display: "block" }}>
              Контакты
            </Button>
          </Link>
          <Link to="/admin-panel">
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Admin Panel
            </Button>
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { md: "flex" }, alignItems: "center" }}
            className="box"
          >
            <Link to="/cart" style={{ marginRight: 10 }}>
              <Badge badgeContent={cartCount} color="error">
                <ShoppingCart />
              </Badge>
            </Link>
            <Link to="/fav" style={{ marginRight: 10 }}>
              <FavoriteIcon />
            </Link>
            {user ? (
              <div>
                <Avatar
                  src={user.photoURL}
                  size="small"
                  alt={user.displayName}
                  sx={{ marginRight: 10, width: 20 }}
                />
                <Button>
                  <Logout color="error" onClick={logOut} />
                </Button>
              </div>
            ) : (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls=""
                aria-haspopup="true"
                color="inherit"
                onClick={authWithGoogle}
                sx={{ marginRight: 5, width: 20 }}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
