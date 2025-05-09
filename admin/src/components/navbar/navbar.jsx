import React from 'react'
import './navbar.css'
import {assets} from '../../assets/assets'
import { CircleUserRound } from 'lucide-react';


const navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.Logo} alt="" />
        <CircleUserRound size={48} strokeWidth={0.5} className='userimage' />
    </div>
  )
}

export default navbar
