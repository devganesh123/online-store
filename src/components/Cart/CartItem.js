import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CartItem = ({ productItem, onUpdateCart, onRemoveItem }) => {
  return (
    <Card sx={{ maxWidth: 345 }} key={productItem.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={productItem.image.url}
        title={productItem.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {productItem.name}
        </Typography>

        <Typography gutterBottom variant="h6" component="div">
          {productItem.price.formatted_with_symbol}
        </Typography>
        <CardActions>
          <Button
            className="input-dec"
            type="button"
            size="small"
            onClick={() => {
              onUpdateCart(productItem.id, productItem.quantity - 1);
            }}
          >
            -
          </Button>
          <Typography gutterBottom variant="h6" component="div">
            {productItem.quantity}
          </Typography>
          <Button
            className="input-inc"
            type="button"
            size="small"
            onClick={() => {
              onUpdateCart(productItem.id, productItem.quantity + 1);
            }}
          >
            +
          </Button>
        </CardActions>
        <CardActions>
          <Button
            className="remove-item"
            color="secondary"
            type="button"
            variant="contained"
            onClick={() => {
              onRemoveItem(productItem.id);
            }}
          >
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CartItem;
