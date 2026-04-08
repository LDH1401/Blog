import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const NavBar = ({user, onLogout}) => {
    const navigate = useNavigate();
    const logout = () => {
        onLogout();
        navigate("/signin");
    }
    return (
       <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Post</Link>
            {user && <Link to="/dashboard">Dashboard</Link>}
            {!user && <Link to="/signin">SignIn</Link>}
            {user && <Link to="/addnewpost">Add New Post</Link>}
            {user && <button onClick={logout}>Logout</button>}
       </nav>
    )
}

export default NavBar;