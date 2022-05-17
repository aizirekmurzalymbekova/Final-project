import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { clientContext } from "../contexts/ClientContext";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ item }) {
  const data = React.useContext(clientContext);
  const { addProductToFav, checkProductInFav, deleteProductInFav } = data;

  return (
    <Card className="card">
      <Link to={`/details/${item.id}`}>
        <CardHeader
          className="cardheader"
          title={item.name}
          subheader={item.category}
        />
        <CardMedia
          className="product-card-image"
          component="img"
          height="450"
          image={item.image[0]}
          alt={item.name}
        />
      </Link>
      <CardActions disableSpacing className="cardaction">
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        {checkProductInFav(item.id) ? (
          <IconButton onClick={() => deleteProductInFav(item.id)}>
            <FavoriteIcon color="error" />
          </IconButton>
        ) : (
          <IconButton onClick={() => addProductToFav(item)}>
            <FavoriteIcon color="inherit" />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
