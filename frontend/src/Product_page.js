import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product_page.css'; // Import the CSS file

function ProductPage() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
                // Initialize quantities state with default values
                const initialQuantities = {};
                response.data.forEach(product => {
                    initialQuantities[product.id] = 0;
                });
                setQuantities(initialQuantities);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const handleQuantityChange = (productId, quantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: quantity
        }));
    };

    const addToCart = (productId) => {
        const quantity = quantities[productId];
        console.log(`Adding ${quantity} of product ${productId} to cart`);
        // Add your logic to add the product to the cart
    };

    return (
        <div className="container product-container">
            <h1>Product Page</h1>
            <div className="row row-cols-1 row-cols-md-3">
                {products.map(product => (
                    <div className="col mb-4" key={product.id}>
                        <div className="card product-card h-100">
                            <div className="product-image-container">
                                <img src={product.image} className="card-img-top product-image" alt={product.title} />
                            </div>
                            <div className="card-body product-details">
                                <h5 className="card-title product-title">{product.title}</h5>
                                <p className="card-text product-description">{product.description}</p>
                                <p className="card-text product-price">Price: ${product.price}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div className="input-group quantity-input">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Quantity" 
                                        value={quantities[product.id]} 
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))} 
                                    />
                                </div>
                                <button className="btn btn-primary add-to-cart-btn" onClick={() => addToCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
