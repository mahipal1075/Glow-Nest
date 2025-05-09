import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
        <p>For Better Experience Download <br/> Our App </p>      
        <div className="app-downloadplate-forms">
            <img src={assets.Play_store} alt="" />
            <img src={assets.App_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload
