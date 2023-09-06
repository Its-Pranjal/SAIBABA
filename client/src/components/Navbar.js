import React from 'react'
import { NavLink } from 'react-router-dom'
import ".././styles/Navbar.css"
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <NavLink className="navbar-brand" to="/">SAIBABA</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {user ? (<>{<h1>{user.name}</h1>}</>) : (<>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/register">REGISTER</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">LOGIN</NavLink>
                            </li>

                        </>)}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navbar