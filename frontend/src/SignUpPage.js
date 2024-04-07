import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role] = useState('customer');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        const user = { name, email, password, role };
        axios.post("http://localhost:3001/createUser", user)
            .then(result => {
                console.log(result)
                alert('Sign up successful! You can now login.');
                // Optionally, you can navigate the user to the login page

                navigate("/login")
            })
            .catch(error => {
                console.log(error)
                alert('Error signing up. Please try again.');
                alert(error);
            })


        // try {
        //     // Send signup request to the server
        //    axios.post('http://localhost:3001/signup', user {
        //         name,
        //         email,
        //         password,
        //         role
        //     });
        //     // Show a success message if signup is successful
        //     alert('Sign up successful! You can now login.');
        //     // Optionally, you can navigate the user to the login page
        //     navigate('/login');
        // } catch (error) {
        //     // Handle error if signup fails
        //     alert('Error signing up. Please try again.');
        //     alert(error);
        // }
    };

    const handleReset = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            <div className="d-flex justify-content-center">SignUpPage</div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Sign Up</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" name="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" name="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" id="confirmPassword" name="confirmPassword" />
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
                                    <button type="button" className="btn btn-danger mt-3 ms-3" onClick={handleReset}>Reset</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;
