import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login request to the server
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password
            });
            // Show a success message if login is successful
            alert('Login successful!');
            // Optionally, you can navigate the user to the dashboard or home page
            navigate('/product_page');
        } catch (error) {
            // Handle error if login fails
            setError('Invalid email or password. Please try again.');
            console.error(error);
        }
    };

    return (
        <>
            <h1 className="row justify-content-center">Login Page For User</h1>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">User Login</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" name="password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                    {error && <p className="text-danger mt-2">{error}</p>}
                                </form>
                            </div>
                            <div className="card-footer">
                                <p className="mb-0">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
