import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./products.css";
import "../../style.css";

const Products = ({ productsList, onAddToCart }) => {
  console.log(productsList);
  return (
    <div className="container">
      <div className="card">
        {productsList.map((productItem) => (
          <div className="card-item" key={productItem.id}>
            <ProductItem
              productItem={productItem}
              onAddToCart={onAddToCart}
            ></ProductItem>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
