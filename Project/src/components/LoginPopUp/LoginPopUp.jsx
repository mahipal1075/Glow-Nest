import React, { useContext, useEffect, useState } from 'react'
import './LoginPopUp.css'
import { SquareX } from 'lucide-react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopUp = ({ setShowLogin }) => {

    const {url, setToken} = useContext(StoreContext)

    const [currentState, setCurrentState] = useState("Login");

    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandeler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if(currentState==='Login'){
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert(response.data.message)
        }

    }

    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <SquareX onClick={() => setShowLogin(false)} className='cross' />
                </div>
                <div className='login-popup-input'>
                    {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandeler} value={data.name} type="text" placeholder='Enter Your Name...' required />}
                    <input name='email' onChange={onChangeHandeler} value={data.email} type="email" placeholder='Enter Your email...' required />
                    <input name='password' onChange={onChangeHandeler} value={data.password} type="password" placeholder='Enter Your Password...' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the term of use & privecy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span> </p>
                    : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span> </p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp
