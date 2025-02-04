import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-2xl border-black border-2 p-6">
            <div>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;