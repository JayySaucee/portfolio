import { useEffect } from 'react';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div>
            {/* Introduction section of the page with a photo of myself */}
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
        
            {/* About Me section of information */}
            <div className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8">A little bit about me...</h1>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8 px-8">
                <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up">
            <h2 className="text-3xl mb-4">Past</h2>
            <p className="text-xl">
                I am a recent graduate of Oregon State University, where I earned a Bachelor of Science in Computer Science. During my academic journey, I gained valuable experience through an internship with Captured Sun, a tech startup, where I contributed to the Parchment project as a Software Engineer Intern. My university education also provided me with a solid foundation in web and mobile development, along with essential computer science concepts.
            </p>
        </div>
        <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl mb-4">Current</h2>
            <p className="text-xl">
                Currently, I am focused on honing my skills as a Software Engineer, working on various projects that involve both front-end and back-end development. I am actively engaged in learning new technologies and frameworks to stay updated with industry trends. My current role allows me to apply my knowledge in real-world scenarios, enhancing my problem-solving abilities and technical expertise.
            </p>
        </div>
        <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-3xl mb-4">Future Goals</h2>
            <p className="text-xl">
                Looking ahead, I aspire to take on more challenging projects that push the boundaries of innovation and creativity. My goal is to become a lead developer, where I can mentor junior developers and contribute to large-scale projects. I am also interested in exploring opportunities in that will be beneficial to others and help society.
            </p>
        </div>
                </div>
            </div>
        </div>
        );
    };

export default HomePage;