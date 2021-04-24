import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          <p></p>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket </button>
    </div>
  );
}

export default Product;
