import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


function Product_page() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomNumber2 = Math.floor(Math.random() * 2) // This will give you a number between 0 (inclusive) and 4 (exclusive)
    const stockquantity =randomNumber;
    const stockcheck = stockquantity;
    const userinput = randomNumber2;
    const productname = "Product 1"
    const [quantity, setQuantity] = useState(1); 
    const stockprice = 15;
    const navigate = useNavigate();
    function HandleAddCart(){

        if(stockcheck == userinput){
            alert(" Sorry the product you selected is Out of Stock")
            return
        }else if(stockcheck < userinput){
            alert(" Sorry the product you selected we only have "+stockquantity+" in stock")
            return
        }else
        {
        alert(productname+"Added to cart")
        navigate("/CartPage")
        }
    }

  return (
    <>
        <div className="container mt-4">
            <h1>Product Page</h1>
            <div className="row">
                {/* Add your product card structure here */}
                <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 4</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 5</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 6</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <img src="product-image.jpg" className="card-img-top" alt="Product" />
                            <div className="card-body">
                                <h5 className="card-title">Product 7</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus magna vel gravida varius. Nulla facilisi.</p>
                                <p className="card-text">RM {stockprice}</p>
                                <div className="input-group mb-3">
                                    <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <button className="btn btn-primary" onClick={HandleAddCart}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Repeat the above card structure for each product */}
            </div>
        </div>
    </>
  )
}

export default Product_page