import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/regis'>Registration</Link>
            <Link to='/regisRBS'>Registration RBS</Link>
        </div>
    );
};

export default Navbar;