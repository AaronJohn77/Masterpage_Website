import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CartPage() {


    const [productname, setproductname] = useState('');
    const [productprice, setproductprice] = useState('');
    const [productquantity, setproductquantity] = useState('');
    const navigate = useNavigate();
    const subtotal = 0;
    const total = 0;

  return (


          <>
          <div className="container mt-4">
              <h2>Cart Page</h2>
              <table className="table">
                  <thead>
                      <tr>
                          <th>Product Name</th>
                          <th>Product Price</th>
                          <th>Product Quantity</th>
                          <th>Subtotal</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Product 1</td>
                          <td>$15</td>
                          <td>1</td>
                          <td>$15</td>
                      </tr>
                      {/* You can dynamically render rows for each product in your cart */}
                  </tbody>
                  <tfoot>
                      <tr>
                          <td colSpan="3">Total:</td>
                          <td>$15</td> {/* Total value calculated dynamically */}
                      </tr>
                  </tfoot>
              </table>
              <div className="text-end">
                  <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
              </div>
          </div>
        </>
  )
}

export default CartPage