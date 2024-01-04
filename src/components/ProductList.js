import React, { useEffect, useState } from 'react'

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
    console.table("products", products);
    return (
        <div className='product-list'>
            <h3> Product List</h3>
            <ul>
                <li> S.no</li>
                <li> Name</li>
                <li> Price</li>
                <li>Category</li>

            </ul>
            {
                products.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li> {index + 1}</li>
                            <li> {item.name}</li>
                            <li> ${item.price}</li>
                            <li>{item.category}</li>

                        </ul>
                    );
                })
            }
        </div>
    )
}

export default ProductList