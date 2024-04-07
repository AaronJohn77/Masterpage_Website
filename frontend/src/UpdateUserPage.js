import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateUserPage() {
    const { id } = useParams(); // Extract the user ID from the URL
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });

    useEffect(() => {
        // Fetch user data from the server using the user ID
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(response => {
                setUser(response.data); // Update user state with fetched data
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated user data to the server
        axios.put(`http://localhost:3001/updateUser/${id}`, user)
            .then(response => {
                console.log('User updated successfully:', response.data);
                // Optionally, you can navigate the user to another page after successful update
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    return (
        <>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input  name="password" value={user.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Role:</label>
                    <select name="role" value={user.role} onChange={handleChange}>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Update</button>
            </form>
        </>
    );
}

export default UpdateUserPage;
