import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    // console.log("products", products);
    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete"
        })

        result = await result.json()
        if (result) {
            alert("record is deleted");
        }
    }

    const searchHandle = async (e) => {
        // console.warn(e.target.value);
        let key = e.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`)
            result = await result.json();
            if (result) {
                setProducts(result);
            }
            else{
                 getProducts();
             }
        }
       
    }


    return (
        <div className='product-list'>
            <h3> Product List</h3>
            <input
                type='text'
                placeholder='Search'
                className='searchBox'
                onChange={searchHandle}></input>
            <ul>
                <li> S.no</li>
                <li> Name</li>
                <li> Price</li>
                <li>Category</li>
                <li>Operation</li>

            </ul>
            {
                products.length>0 ? products.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li> {index + 1}</li>
                            <li> {item.name}</li>
                            <li> ${item.price}</li>
                            <li>{item.category}</li>
                            <li>
                                <button onClick={() => deleteProduct(item._id)} type='button' className='deletebtn'>Delete</button>
                                <Link to={"/update/" + item._id}>Update</Link>
                            </li>

                        </ul>
                    );
                })
                :<h1>No Result Found</h1>

            }
        </div>
    )
}

export default ProductList