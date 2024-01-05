import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params=useParams();

    useEffect(()=>{
     console.log(params);
     getProductDetails();
    },[])

    const getProductDetails =async()=>{
        console.log(params)
        let result =await fetch(`http://localhost:5000/product/${params.id}`)
        result=await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category);
        setCompany(result.company);
    }   

    const handleupdateproduct = async () => {
        console.log(name,price,category,company)
       

    }
    return (
        <div className='addproduct'>
            <h1> Update  Product</h1>
            <input
                type='text'
                placeholder='Enter product name'
                className='inputBox'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Enter price'
                className='inputBox'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <input
                type='text'
                placeholder='Enter Category'
                className='inputBox'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />

            <input
                type='text'
                placeholder='Enter Company'
                className='inputBox'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <button className='updateproductbtn' type='button' onClick={handleupdateproduct}>Update Product</button>
        </div>
    );
};

export default UpdateProduct