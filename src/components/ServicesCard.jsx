import { Card, CardActions, CardHeader, IconButton } from "@mui/material";
import React from "react";
import { clientContext } from "../contexts/ClientContext";
import { ShoppingCart } from "@mui/icons-material";
import "./ServicesCard.css";

const ServicesCard = ({ item }) => {
  const data = React.useContext(clientContext);
  const { addServiceToCart, checkServiceInCart, deleteServiceInCart } = data;
  return (
    <div>
      <Card className="card-services">
        <CardHeader className="cardheader" title={item.tariff} />
        <CardActions disableSpacing className="cardaction">
          {checkServiceInCart(item.id) ? (
            <IconButton onClick={() => deleteServiceInCart(item.id)}>
              <ShoppingCart color="error" />
            </IconButton>
          ) : (
            <IconButton onClick={() => addServiceToCart(item)}>
              <ShoppingCart color="inherit" />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ServicesCard;
