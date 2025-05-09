import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const { getTotalCartAmount, token, product_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    product_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    })



    // if (orderItems.length === 0) {
    //   alert("Your cart is empty.");
    //   return;
    // }



    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 100,
    }

    try {

      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });

      console.log("Order response:", response.data);

      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      }
      else {
        alert("Order failed: " + (response.data.message || "Unknown error"));
      }
    }
    catch(error){
      console.error("Order error:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(!token){
      navigate("/cart");
      alert("Please Login or Sign up.....!");
    }
    else if(getTotalCartAmount()===0){
      navigate("/cart");
      alert("Please buy some products.....!")
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='place-order' >
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandeler} value={data.firstName} type="text" placeholder='First Name' />
          <input required name="lastName" onChange={onChangeHandeler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>
        <input required name="email" onChange={onChangeHandeler} value={data.email} type="text" placeholder='Email address' />
        <input required name="street" onChange={onChangeHandeler} value={data.street} type="text" placeholder='Street' />
        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandeler} value={data.city} type="text" placeholder='City' />
          <input required name="state" onChange={onChangeHandeler} value={data.state} type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" onChange={onChangeHandeler} value={data.zipcode} type="text" placeholder='Zip code' />
          <input required name="country" onChange={onChangeHandeler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name="phone" onChange={onChangeHandeler} value={data.phone} type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right">
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
          <div className="placeorder-buttons">
            <button type='submit'>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
