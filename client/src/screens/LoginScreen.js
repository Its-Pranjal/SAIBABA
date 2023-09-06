import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Register.css";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const user = {
                email,
                password
            };

            const response = await axios.post('/api/users/login', user);
            localStorage.setItem('currentUser', JSON.stringify(response.data)); // Store user data
            window.location.href = '/home'; // Corrected line
            console.log(response.data);
            alert("User logged in successfully");
        } catch (error) {
            console.error(error);
            alert("Login failed. Please check your credentials.");
        }
    };

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div>
                        <h1>LOGIN</h1>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            className='form-control'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='btn btn-primary' onClick={handleLogin}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
