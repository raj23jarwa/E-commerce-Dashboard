import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const handleaddproduct=async()=>{
        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId);
        
        let result = await fetch("http://localhost:5000/add-product", {
    method: "POST",
    body: JSON.stringify({ name, price, category, company, userId }),
    headers: {
        "Content-Type": "application/json"
    }
});

        result=await result.json();
        console.log(result);

    }
    return (
        <div className='addproduct'>
            <h1> Add Product</h1>
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
            <button className='addproductbtn' type='button' onClick={handleaddproduct}>Add Product</button>
        </div>
    );
};

export default AddProduct;
