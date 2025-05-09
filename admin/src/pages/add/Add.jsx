// import React, { useState } from 'react'
// import './Add.css'
// import { assets } from '../../assets/assets'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Add = () => {

//     const url = "http://localhost:4000"

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Books"
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name", data.name)
//         formData.append("description", data.description)
//         formData.append("price", Number(data.price))
//         formData.append("category", data.category)
//         formData.append("image", image)
//         const response = await axios.post(`${ url } / api / item / add`, formData);
//         if (response.data.success) {
//             setData({
//                 name: "",
//                 description: "",
//                 price: "",
//                 category: "Books"
//             })
//             setImage(false)
//             toast.success(response.data.message)
//         }
//         else {
//             toast.error(response.data.message);
//         }
//     }


//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className="add-img-upload flex-col">
//                     <p>Upload Image</p>
//                     <label htmlFor='image'>
//                         <img src={image ? URL.createObjectURL(image) : assets.Upload} alt='' />
//                     </label>
//                     <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
//                 </div>

//                 <div className="add-product-name flex-col">
//                     <p>Product Name</p>
//                     <input onChange={onChangeHandler} value={data.name} type='text' name="name" placeholder='Type here' />
//                 </div>

//                 <div className="add-product-description flex-col">
//                     <p>Product Description</p>
//                     <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required />
//                 </div>

//                 <div className="add-category-price">
//                     <div className="add-category flex-col">
//                         <p>Product Category</p>
//                         <select onChange={onChangeHandler} name='category'>
//                             <option value="Books">Books</option>
//                             <option value="Bags">Bags</option>
//                             <option value="Bottles">Bottles</option>
//                             <option value="Calculators">Calculators</option>
//                             <option value="Lamps">Lamps</option>
//                             <option value="Pens">Pens</option>
//                             <option value="Notebooks">Notebooks</option>
//                             <option value="Tablets">Tablets</option>
//                         </select>
//                     </div>
//                     <div className="add-price flex-col">
//                         <p>Product Price</p>
//                         <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='₹ 20' />
//                     </div>
//                 </div>
//                 <button type='submit' className='add-btn'>ADD</button>

//             </form>
//         </div>
//     )
// }

// export default Add



















import React, { useEffect, useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({url}) => {

    const [image, setImage] = useState(false);
    
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Monitor"
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data,[name]:value}));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",Number(data.price));
        formData.append("category",data.category);
        formData.append("image",image);
        
        try {
            const response = await axios.post(`${url}/api/product/add`, formData);
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Moisturizer"
                });
                setImage(false);
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong. Try again later.");
        }
    };

    return (
        <div className='add-page'>
            <form className="flex-col" onSubmit={onSubmitHandler} >
                <div className='add-image-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):assets.Upload} alt="" />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        required
                    />
                </div>

                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" required
                    />
                </div>

                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea
                        onChange={onChangeHandler}
                        value={data.description}
                        name="description"
                        rows="6"
                        placeholder="Write content here"
                        required
                    />
                </div>

                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Category</p>
                        <select onChange={onChangeHandler} name="category" value={data.category}>
                            <option value="Monitor">Monitor</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Mouse">Mouse</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Smartwatch">Smartwatch</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Chair">Chair</option>
                            <option value="Pendrive">Pendrive</option>
                        </select>
                    </div>
                    <div className="price flex-col">
                        <p>Product Price</p>
                        <input
                            onChange={onChangeHandler}
                            value={data.price}
                            type="number"
                            name="price"
                            placeholder="Ex. Rs.3000/-"
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="add-button">ADD ITEMS</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Add;



















// import React, { useState } from 'react'
// import './Add.css'
// import { assets } from '../../assets/assets'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Add = () => {

//     const url = "http://localhost:4000"

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Monitor"
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]:value}))
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name", data.name)
//         formData.append("description", data.description)
//         formData.append("price", Number(data.price))
//         formData.append("category", data.category)
//         formData.append("image", image)
//         const response = await axios.post(`${url}/api/item/add`, formData);
//         if (response.data.success) {
//             setData({
//                 name: "",
//                 description: "",
//                 price: "",
//                 category: "Books"
//             })
//             setImage(false)
//             toast.success(response.data.message)
//         }
//         else {
//             toast.error(response.data.message);
//         }
//     }


//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className="add-img-upload flex-col">
//                     <p>Upload Image</p>
//                     <label htmlFor='image'>
//                         <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
//                     </label>
//                     <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
//                 </div>

//                 <div className="add-product-name flex-col">
//                     <p>Product Name</p>
//                     <input onChange={onChangeHandler} value={data.name} type='text' name="name" placeholder='Type here' />
//                 </div>

//                 <div className="add-product-description flex-col">
//                     <p>Product Description</p>
//                     <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required />
//                 </div>

//                 <div className="add-category-price">
//                     <div className="add-category flex-col">
//                         <p>Product Category</p>
//                         <select onChange={onChangeHandler} name='category'>
//                             <option value="Books">Books</option>
//                             <option value="Bags">Bags</option>
//                             <option value="Bottles">Bottles</option>
//                             <option value="Calculators">Calculators</option>
//                             <option value="Lamps">Lamps</option>
//                             <option value="Pens">Pens</option>
//                             <option value="Notebooks">Notebooks</option>
//                             <option value="Tablets">Tablets</option>
//                         </select>
//                     </div>
//                     <div className="add-price flex-col">
//                         <p>Product Price</p>
//                         <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='₹ 20' />
//                     </div>
//                 </div>
//                 <button type='submit' className='add-btn'>ADD</button>

//             </form>
//         </div>
//     )
// }

// export default Add


























// import React, { useState } from 'react'
// import './add.css'
// import { assets } from '../../assets/assets';
// import axios from "axios"

// const add = () => {

//     const url = "http://localhost:4000";

//     const [image, setImage] = useState(false);

//     const[data, setData] = useState({
//         name:"",
//         description:"",
//         price:"",
//         category:"Moniter"
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data=>({...data,[name]:value}))
//     }

//     const onsubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new formData();
//         formData.append("name", data.name)
//         formData.append("description", data.description)
//         formData.append("price", Number(data.price))
//         formData.append("category", data.category)
//         formData.append("image", image)
//         const response = await axios.post(`${url}/api/product/add`,formData);
//         if(response.data.success){
//             setData({
//                 name:"",
//                 description:"",
//                 price:"",
//                 category:"Moniter"
//             })
//             setImage(false)
//         }
//         else{
//             toast.error(response.data.message);
//         }
//     }

//     return (
//         <div className='add-page'>
//             <form className="flex-col" onSubmit={onsubmitHandler}>
//                 <div className='add-image-upload flex-col'>
//                     <p>Upload Image</p>
//                     <label htmlFor="image">
//                         <img src={image?URL.createObjectURL(image):assets.Upload} alt="" />
//                     </label>
//                     <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" className='hd' hidden required />
//                 </div>
//                 <div className="add-product-name flex-col">
//                     <p>Product Name</p>
//                     <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='type here' />
//                 </div>
//                 <div className="add-product-description flex-col">
//                     <p>Product Description</p>
//                     <textarea onChange={onChangeHandler} value={data.description} name="description" row="6" placeholder='Write content here' required ></textarea>
//                 </div>
//                 <div className="add-category-price">
//                     <div className="add-category flex-col">
//                         <p>Product Category</p>
//                         <select onChange={onChangeHandler} name="category">
//                             <option value="Monitor">Monitor</option>
//                             <option value="Laptop">Laptop</option>
//                             <option value="Mouse">Mouse</option>
//                             <option value="Keyboard">Keyboard</option>
//                             <option value="Smartwatch">Smartwatch</option>
//                             <option value="Headphone">Headphone</option>
//                             <option value="Chair">Chair</option>
//                             <option value="Pendrive">Pendrive</option>
//                         </select>
//                     </div>
//                     <div className="price flex-col">
//                         <p>Product Price</p>
//                         <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='Ex. Rs.3000/-' />
//                     </div>
//                 </div>
//                 <button type="submit" className='add-button'>ADD</button>
//             </form>
//         </div>
//     )
// }

// export default add




// import React, { useState } from 'react'
// import './Add.css'
// import { assets } from '../../assets/assets'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Add = () => {

//     const url = "http://localhost:4000";

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Books"
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name", data.name)
//         formData.append("description", data.description)
//         formData.append("price", Number(data.price))
//         formData.append("category", data.category)
//         formData.append("image", image)
//         const response = await axios.post(`${ url } / api / item / add`, formData);
//         if (response.data.success) {
//             setData({
//                 name: "",
//                 description: "",
//                 price: "",
//                 category: "Monitor"
//             })
//             setImage(false)
//             toast.success(response.data.message)
//         }
//         else {
//             toast.error(response.data.message);
//         }
//     }


//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className="add-img-upload flex-col">
//                     <p>Upload Image</p>
//                     <label htmlFor='image'>
//                         <img src={image ? URL.createObjectURL(image) : assets.Upload} alt='' />
//                     </label>
//                     <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
//                 </div>

//                 <div className="add-product-name flex-col">
//                     <p>Product Name</p>
//                     <input onChange={onChangeHandler} value={data.name} type='text' name="name" placeholder='Type here' />
//                 </div>

//                 <div className="add-product-description flex-col">
//                     <p>Product Description</p>
//                     <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required />
//                 </div>

//                 <div className="add-category-price">
//                     <div className="add-category flex-col">
//                         <p>Product Category</p>
//                         <select onChange={onChangeHandler} name='category'>
//                             <option value="Books">Books</option>
//                             <option value="Bags">Bags</option>
//                             <option value="Bottles">Bottles</option>
//                             <option value="Calculators">Calculators</option>
//                             <option value="Lamps">Lamps</option>
//                             <option value="Pens">Pens</option>
//                             <option value="Notebooks">Notebooks</option>
//                             <option value="Tablets">Tablets</option>
//                         </select>
//                     </div>
//                     <div className="add-price flex-col">
//                         <p>Product Price</p>
//                         <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='₹ 20' />
//                     </div>
//                 </div>
//                 <button type='submit' className='add-btn'>ADD</button>

//             </form>
//         </div>
//     )
// }

// export default Add