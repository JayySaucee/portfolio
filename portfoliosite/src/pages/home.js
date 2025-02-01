import { useEffect } from 'react';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div className="relative bg-gray-900 text-center w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center w-full p-8">
                <div className="flex-1 text-left p-8" data-aos="fade-right">
                    <h1 className="text-white text-7xl">Jorge Alejandre</h1>
                    <p className="text-white text-4xl">
                        <Typical
                            steps={['Software Engineer', 2000, 'UI/UX Designer', 2000]}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </p>
                </div>
                <div className="flex-1 p-8" data-aos="fade-left">
                    <img src="photos/photo2.jpeg" alt="CFG" className="max-w-lg max-h-md w-auto h-auto object-cover rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;