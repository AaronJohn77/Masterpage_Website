import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product_page.css'; // Import the CSS file

function ProductPage() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // State to store the selected category
    const [searchTerm, setSearchTerm] = useState(''); // State to store the search term

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                const data = response.data;
                setProducts(data);
                // Extract categories from products
                const uniqueCategories = [...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);
                // Initialize quantities state with default values
                const initialQuantities = {};
                data.forEach(product => {
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

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filter products based on selected category and search term
    const filteredProducts = products.filter(product => {
        return (
            (!selectedCategory || product.category === selectedCategory) &&
            (!searchTerm || product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    return (
        <div className="container product-container">
            <h1>Product Page</h1>
            <div className="category-filter">
                <label className="category-label" htmlFor="category-select">Filter by Category: </label>
                <select className="category-select" id="category-select" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="search-box">
                <label className="search-label" htmlFor="search-input">Search by Name: </label>
                <input 
                    className="form-control search-input" 
                    type="text" 
                    id="search-input" 
                    value={searchTerm} 
                    onChange={handleSearchTermChange} 
                    placeholder="Enter product name" 
                />
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                {filteredProducts.map(product => (
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
