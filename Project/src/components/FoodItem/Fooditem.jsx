import React, { useContext } from 'react';
import './Fooditem.css';
import { StoreContext } from '../../context/StoreContext';
import { FaHeart } from "react-icons/fa";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="product-item">
      <div className="wishlist-icon">
        <FaHeart />
      </div>

      {cartItems[id] > 0 && (
  <div className="item-counter">
    <p className="item-count">{cartItems[id]}</p>
  </div>
)}
      <div className="product-item-container">
        <img className="product-item-image" src={`${url}/image/${image}`} alt={name} />
      </div>

      <div className="product-item-info">
        <div className="product-item-name">{name}</div>
        <div className="product-item-disc">
          <p className="product-item-description">{description}</p>
        </div>
        <p className="product-item-price">₹{price}/-</p>

        <div className="product-add">
          {!cartItems[id] ? (
            <div className="add" onClick={() => addToCart(id)}>Add to Cart</div>
          ) : (
            <div className="product-item-counter">
              <div onClick={() => addToCart(id)} className="add1">Add</div>
              <div onClick={() => removeFromCart(id)} className="minus1">Remove</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fooditem;
