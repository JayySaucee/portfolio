import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-2xl border-gray-800 border-4 p-6">
            <div className="flex justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="text-right">
                    <span>Connect with me on my social links!</span>
                    <div className="flex space-x-4 mt-2 justify-end">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                            <i className="fab fa-twitter"> Twitter </i>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                            <i className="fab fa-linkedin"> LinkedIn </i>
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                            <i className="fab fa-github"> GitHub </i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;