import React, { useContext } from 'react';
import './cart.css';
import { StoreContext } from '../../context/StoreContext';
import { CircleX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, product_list, addToCart, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  if (getTotalCartAmount() === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <button onClick={() => navigate("/")}>Go to Shop</button>
      </div>
    );
  }

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {product_list.map((product, index) => {
          if (cartItems[product._id] > 0) {
            return (
              <div key={product._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/image/" + product.image} alt="" />
                  <p>{product.name}</p>
                  <p>Rs.{product.price}/-</p>
                  <div className="cart-quantity-controller">
                    <button onClick={() => removeFromCart(product._id)}>-</button>
                    <span>{cartItems[product._id]}</span>
                    <button onClick={() => addToCart(product._id)}>+</button>
                  </div>
                  <p>Rs.{product.price * cartItems[product._id]}/-</p>
                  <div onClick={() => removeFromCart(product._id)}><CircleX className='cross' /></div>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}/-</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fees</p>
              <p>Rs.{getTotalCartAmount() === 0 ? 0 : 100}/-</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>Rs.{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}/-</b>
            </div>
          </div>
          <div className="cart-button">
            <button onClick={() => navigate('/order')} >PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promocode...' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
