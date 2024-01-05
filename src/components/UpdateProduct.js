import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(params);
        getProductDetails();
    }, [params.id]);

    const getProductDetails = async () => {
        try {
            console.log(params);
            let result = await fetch(`http://localhost:5000/product/${params.id}`);
            result = await result.json();
            setName(result.name);
            setPrice(result.price);
            setCategory(result.category);
            setCompany(result.company);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    const handleupdateproduct = async () => {
        try {
            console.log(name, price, category, company);
            let result = await fetch(`http://localhost:5000/product/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ name, price, category, company }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            result = await result.json();
            navigate('/');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

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
            <button className='updateproductbtn' type='button' onClick={handleupdateproduct}>
                Update Product
            </button>
        </div>
    );
};

export default UpdateProduct;
