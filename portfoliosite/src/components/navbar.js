import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="font-roboto text-3xl border-gray-800 border-b-4 bg-gray-900 py-4">
            <ul className="flex justify-between items-center p-2">
                <li className="left-4">
                    <a href="#home" className="text-white px-3 py-2 rounded-md">Jorge Alejandre</a>
                </li>
                <div className="flex space-x-4">
                    <li>
                        <a href="#about" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">Projects</a>
                    </li>
                    <li>
                        <a href="#resume" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">Resume</a>
                    </li>
                    <li>
                        <a href="#gallery" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">Gallery</a>
                    </li>
                    <li>
                        <a href="#footer" className="text-white px-3 py-2 rounded-md hover:font-semibold hover:text-blue-400">Contact</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;