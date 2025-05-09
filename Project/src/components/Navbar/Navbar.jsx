import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { BookUser, CircleUserRound, LogOut, Search, ShoppingBasket, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("Home");

    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

    const naviagate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        naviagate("/");
    }

    return (
        <>
            <div className="navbar">
                <Link to='/'><img src={assets.Logo} className="Logo" /></Link>
                <ul className="navbar-menu">
                    <Link onClick={() => { setMenu("Home") }} className={menu === "Home" ? "active" : ""}>Home</Link>
                    <a href='#ExploreMenu' onClick={() => { setMenu("Menu") }} className={menu === "Menu" ? "active" : ""}>Menu</a>
                    <a href='#app-download' onClick={() => { setMenu("Mobile-App") }} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                    <a href='#footer' onClick={() => { setMenu("Contact Us") }} className={menu === "Contact Us" ? "active" : ""}>Contact Us</a>
                </ul>
                <div className="navbar-right">
                    <div className="navbar-search-icon">
                        <Search />
                    </div>
                    <div className="navbar-basket-icon">
                        <Link to='/cart'><ShoppingBasket /></Link>
                        <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                    </div>
                    {!token
                        ? <button onClick={() => setShowLogin(true)}>sign in</button>
                        : <div className="navbar-profile" >
                            <CircleUserRound size={28} color="#000000" strokeWidth={1.5} />
                            <ul className='nav-profile-dropdown'>
                                <li onClick={()=>naviagate("/myorders")}><ShoppingCart className='icons' color="#000000" strokeWidth={1.5} /><p>Orders</p></li>
                                <hr />
                                <li onClick={logout} ><LogOut className='icons' color="#000000" strokeWidth={1.5} /><p>Logout</p></li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default navbar