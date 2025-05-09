import { React, useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../FoodItem/Fooditem.jsx'

const FoodDisplay = ({ category }) => {

    const { product_list } = useContext(StoreContext)

    return (
        <div className="product-Display" id="product-Display">
            <h2>Top Tech Product near you</h2>
            <div className="product-Display-list">
                {product_list.map((product, index) => {
                    if (category === "All" || category === product.category) {
                        return <Fooditem key={index} id={product._id} name={product.name} price={product.price} description={product.description} image={product.image} />
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay