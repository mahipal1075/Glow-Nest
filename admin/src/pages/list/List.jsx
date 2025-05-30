import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import { CircleX } from 'lucide-react'
import 'react-toastify/dist/ReactToastify.css';

const List = ({url}) => {

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const removeProduct = async (productId) => {
    const response = await axios.post(`${url}/api/product/remove`, {id:productId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error................!")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='lists add flex-col' >
      <p>ALL Products List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item, index) => {
          return (
            <div className='list-table-format' key={index}>
              <img src={`${url}/image/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Rs.{item.price}/-</p>
              <div><CircleX size={25} className='cross-button' onClick={() => removeProduct(item._id)} /></div>
            </div>
          )
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default List







// import React, { useEffect, useState } from 'react'
// import './List.css'
// import axios from 'axios'
// import {toast} from 'react-toastify'

// const List = () => {

//   const url = "http://localhost:4000"

//   const [list, setList] = useState([]);

//   const fetchList = async ()=>{
//       const response = await axios.get(`${url}/api/product/list`);
//       if (response.data.success){
//         setList(response.data.data);
//       }
//       else{
//         toast.error("Error")
//       }
//   }

//   // const removeItem = async(itemId) =>{
//   //   const response = await axios.post(`${url}/api/item/remove`,{id:itemId});
//   //   await fetchList();
//   //   if (response.data.success) {
//   //     toast.success(response.data.message)
//   //   }
//   //   else{
//   //     toast.error("Error")
//   //   }
//   // }

//   useEffect(()=>{
//     fetchList();
//   },[])

//   return (
//     <div className='list add flex-col'>
//       <p>All Products List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//             <b>Image</b>
//             <b>Name</b>
//             <b>Category</b>
//             <b>Price</b>
//             <b>Action</b>
//         </div>
//         {list.map((item,index)=>{
//           return(
//             <div key={index} className="list-table-format">
//               <img src={`${url}/image/`+item.image} alt='' />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>{item.price}</p>
//               <p onClick={()=>removeItem(item._id)} className='cursor'>X</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default List