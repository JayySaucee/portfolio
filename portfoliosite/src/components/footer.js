import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-2xl border-gray-800 border-4 p-6">
            <div id="footer" className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} Jorge Alejandre. All rights reserved.</p>
                <div className="text-center md:text-right">
                    <span>Connect with me on my social links!</span>
                    <div className="flex justify-center md:justify-end space-x-4 mt-2">
                        <a href="https://www.linkedin.com/in/jorge-alejandre-3b95bb161/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/JayySaucee" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4 mt-4">
                        <a href="mailto:jorgealejandre.piki@gmail.com" className="text-white hover:text-blue-400">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                        <a href="tel:+15039562373" className="text-white hover:text-blue-400">
                            <i className="fas fa-phone fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;