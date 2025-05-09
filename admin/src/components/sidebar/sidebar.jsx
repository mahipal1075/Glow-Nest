import React from 'react'
import './sidebar.css'
import { ClipboardList, CopyPlus, ListOrdered } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option add">
                    <CopyPlus size={35} strokeWidth={0.5} />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option list">
                    <ClipboardList size={35} strokeWidth={0.5} />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option order">
                    <ListOrdered size={35} strokeWidth={0.5} />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default sidebar
