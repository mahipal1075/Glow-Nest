import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import Add from './pages/add/Add.jsx'
import List from './pages/list/List.jsx'
import Orders from './pages/orders/Orders.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = import.meta.env.VITE_BACKEND_URL || "https://glow-nest-dzvu.onrender.com";

  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes className="app-main-page" >
          <Route path="/" element={<Navigate to="/list" replace />} />
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
