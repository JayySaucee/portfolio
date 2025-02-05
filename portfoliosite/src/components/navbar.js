import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="font-roboto text-3xl bg-gray-800 py-4">
            <ul className="flex justify-between items-center p-2">
                <li className="left-4">
                    <Link to="/" className="text-white px-3 py-2 rounded-md">Jorge Alejandre</Link>
                </li>
                <div className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">Contact</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;