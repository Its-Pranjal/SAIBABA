import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Register.css"

const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    async function register() {
        if (password === cpassword) {
            const user = {
                name,
                email,
                password
            }

            try {
                const result = await axios.post('/api/users/register', user);
                console.log(result.data); // Check the response data
                alert("User registered successfully");
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("confirm Password don't match with password");
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div>
                        <h1>REGISTER</h1>
                        <input type='text' className='form-control' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                        <input type='text' className='form-control' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' className='form-control' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type='password' className='form-control' placeholder='confirm-password' value={cpassword} onChange={(e) => setCpassword(e.target.value)} />
                        <button className='btn btn-primary' onClick={register}>REGISTER</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterScreen;
