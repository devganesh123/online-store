import React, { useState, useEffect } from "react";
import { Navbar, Products, Cart } from "./components";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  // const productsList = [
  //   {
  //     id: "1",
  //     name: "headphone",
  //     price: "$20",
  //     desc: "This is a good product to buy to your list.",
  //   },
  //   {
  //     id: "2",
  //     name: "bluetooth",
  //     price: "$40",
  //     desc: "This is a good product to buy to your list.",
  //   },
  //   {
  //     id: "3",
  //     name: "Mobile",
  //     price: "$400",
  //     desc: "This is a good product to buy to your list.",
  //   },
  // ];

  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState({});

  const fetchData = async () => {
    const { data } = await commerce.products.list();
    console.log(data);
    setProductsList(data);
  };

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const handleAddCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log(item);
    setCart(item);
  };

  const handleUpdateCart = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response);
  };

  const handleRemoveItem = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response);
  };

  const handleEmptyCart = async (productId) => {
    const response = await commerce.cart.empty();
    setCart(response);
  };

  useEffect(() => {
    fetchData();
    fetchCart();
  }, []);

  return (
    <Router>
      <div className="app-section">
        <Navbar totalItem={cart.total_items}></Navbar>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Products
                productsList={productsList}
                onAddToCart={handleAddCart}
              ></Products>
            }
          ></Route>
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cart={cart}
                handleUpdateCart={handleUpdateCart}
                handleRemoveItem={handleRemoveItem}
                handleEmptyCart={handleEmptyCart}
              ></Cart>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
