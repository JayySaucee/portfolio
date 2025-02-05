import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-gray-900 text-white text-2xl border-gray-800 border-t-4 p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Jorge Alejandre. All rights reserved.</p>
                <div className="text-center md:text-right mt-4 md:mt-0">
                    <span className="py-2">Connect with me on my social links!</span>
                    <div className="flex justify-center md:justify-end space-x-4 mt-2">
                        <a href="https://www.instagram.com/jayy_saucee/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a href="https://twitter.com/JayySauceee" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jorge-alejandre-3b95bb161/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://github.com/JayySaucee" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                            <i className="fab fa-github fa-2x"></i>
                        </a>
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4 mt-4">
                        <a href="mailto:jorgealejandre.piki@gmail.com" className="text-white hover:text-blue-400">
                            <i className="fas fa-envelope fa-2x text-2xl"> jorgealejandre.piki@gmail.com</i>
                        </a>
                        <a href="tel:+15039562373" className="text-white hover:text-blue-400">
                            <i className="fas fa-phone fa-2x text-2xl"> (503)-956-2373</i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;