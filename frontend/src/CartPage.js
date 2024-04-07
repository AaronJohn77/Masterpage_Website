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
   
    <div>CartPage</div>
    <table>

        <tr>
            <th>Prodcut Name</th>
            <th>Product Price</th>
            <th>Product Quantity</th>
        </tr>
        <tr>
            <td>Product 1</td>
            <td>15</td>
            <td>1</td>
        </tr>






    </table>
    
    
    
    
    </>
  )
}

export default CartPage