import React from 'react';

function Navbar() {
    return (
        <nav className="font-roboto text-3xl border-gray-800 border-b-4 bg-gray-900">
            <ul className="flex flex-col md:flex-row justify-between items-center p-4">
                <li className="mb-4 md:mb-0">
                    <a href="#home" className="text-white px-0 rounded-md">
                        <img src="photos/JorgeLogo.png" alt="Logo" className="w-24 h-24 md:w-48 md:h-48 m-0 p-2" />
                    </a>
                </li>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <a href="#about" className="text-white px-3 rounded-md hover:font-semibold hover:text-blue-400">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-white px-3 rounded-md hover:font-semibold hover:text-blue-400">Projects</a>
                    </li>
                    <li>
                        <a href="#resume" className="text-white px-3 rounded-md hover:font-semibold hover:text-blue-400">Resume</a>
                    </li>
                    <li>
                        <a href="#gallery" className="text-white px-3 rounded-md hover:font-semibold hover:text-blue-400">Gallery</a>
                    </li>
                    <li>
                        <a href="#footer" className="text-white px-3 rounded-md hover:font-semibold hover:text-blue-400">Contact</a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;