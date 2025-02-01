import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;