import React, { useContext, useEffect } from 'react'
import './verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext.jsx'

const verify = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success, orderId});
        if(response.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[])

    return (
        <div className='verify'>
            <div className="spinner">

            </div>
        </div>
    )
}

export default verify
