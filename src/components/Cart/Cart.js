import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = ({
  cart,
  handleUpdateCart,
  handleRemoveItem,
  handleEmptyCart,
}) => {
  const isEmpty = !cart.line_items;
  console.log(cart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="empty-cart"> Cart is Empty </div>
      </div>
    );
  };

  const FilledCart = () => {
    return (
      <div className="container">
        <Typography gutterBottom variant="h5" component="div">
          Your Products on Cart Item
        </Typography>

        <div className="filled-cart card">
          {cart.line_items.map((productItem) => (
            <div className="card-item" key={productItem.id}>
              <CartItem
                productItem={productItem}
                onUpdateCart={handleUpdateCart}
                onRemoveItem={handleRemoveItem}
              ></CartItem>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <Typography variant="h6" component="h6">
            SubTotal : <small>{cart.subtotal.formatted_with_symbol} </small>
          </Typography>
          <div className="cart-buttons">
            <Button
              className="cart-button"
              type="button"
              size="small"
              color="primary"
              variant="contained"
              onClick={() => {
                handleEmptyCart();
              }}
            >
              Empty Cart
            </Button>
            <Button
              className="cart-button"
              type="button"
              size="small"
              color="secondary"
              variant="contained"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-section">
      {isEmpty ? <EmptyCart></EmptyCart> : <FilledCart></FilledCart>}
    </div>
  );
};

export default Cart;
