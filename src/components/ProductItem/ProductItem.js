import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./productitem.css";
import { commerce } from "../../lib/commerce";

const ProductItem = ({ productItem, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={productItem.image.url}
        title={productItem.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productItem.name}
        </Typography>
        <div className="card-item_cart">
          <Typography gutterBottom variant="h6" component="div">
            {productItem.price.formatted_with_symbol}
          </Typography>
          <CardActions>
            <ShoppingCartIcon
              variant="contained"
              onClick={() => {
                onAddToCart(productItem.id, 1);
              }}
            ></ShoppingCartIcon>
          </CardActions>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: productItem.description }}
          variant="body2"
          color="text.secondary"
        ></Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
