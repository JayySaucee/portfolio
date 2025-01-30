import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800">
            <ul className="flex space-x-4 p-4">
                <li>
                    <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;