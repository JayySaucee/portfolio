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
                        <img src="photos/photo2.jpeg" alt="Universal Studios" className="max-w-lg max-h-md w-auto h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        
            {/* About Me section of information */}
            <div className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8">A little bit about my...</h1>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8 px-8">
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up">
                        <h2 className="text-3xl mb-4">Past</h2>
                        <p className="text-xl">
                            I am a recent graduate of Oregon State University, where I earned a Bachelor of Science in Computer Science. During my academic journey, I gained valuable experience through an internship with Captured Sun, a tech startup, where I contributed to the Parchment project as a Software Engineer Intern. My university education also provided me with a solid foundation in web and mobile development, along with essential computer science concepts.
                        </p>
                    </div>
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-3xl mb-4">Present</h2>
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
        
            {/* Skills Section */}
            <div className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8">Skills</h1>
                <div className="flex flex-wrap justify-center space-x-4">
                    <span className="bg-gray-800 p-4 rounded-lg">JavaScript</span>
                    <span className="bg-gray-800 p-4 rounded-lg">React</span>
                    <span className="bg-gray-800 p-4 rounded-lg">Node.js</span>
                    <span className="bg-gray-800 p-4 rounded-lg">SQL</span>
                    <span className="bg-gray-800 p-4 rounded-lg">Git</span>
                    <span className="bg-gray-800 p-4 rounded-lg">C++</span>
                    <span className="bg-gray-800 p-4 rounded-lg">Docker</span>
                    <span className="bg-gray-800 p-4 rounded-lg">MongoDB</span>
                    <span className="bg-gray-800 p-4 rounded-lg">Google Cloud</span>
                    <span className="bg-gray-800 p-4 rounded-lg">Postman</span>
                </div>
            </div>
        
            {/* Projects Section */}
            <div className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8">Previous Projects</h1>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8 px-8">
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up">
                        <img src="photos/Parchment.png" alt="Parchment Project" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-3xl mb-4">Parchment</h2>
                        <p className="text-xl">This project was apart of my software engineering internship where we used many of the current day technologies such as Javascript, Swift, C and C#, plus many more. The purpose of the project is to bridge together the online third party applications with local device file management systems and make one seamless workspace, where both the internet and your file system are one, increasing workplace productivity and efficiency.</p>
                    </div>
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <img src="photos/Construction.jpeg" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-3xl mb-4">Construction Site</h2>
                        <p className="text-xl">This website is a current work in progress, but is nearly done. It makes use of React and various libraries in order to provide a site for a local business that fulfills installation orders for local clients in the willamette valley area. This project has taught me more about communication skills and business customs related to freelancing for others.</p>
                    </div>
                </div>
            </div>
        
            {/* Resume/CV Download Section */}
            <div className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8">Resume/CV</h1>
                <a href="JorgeAlejandreResume.pdf" className="bg-blue-500 text-white p-4 rounded-lg" download>Download My Resume</a>
            </div>
        
            {/* Personal Fun Fact Section */}
            <div className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8">Fun Facts about me</h1>
                <p className="text-xl w-full ">
                    When I'm not coding, I enjoy gaming on my desktop. This can range from hero shooters such as marvel rivals to exploration survival games such as No Mans Sky, I am typically very open to playing any new game as well. Besides gaming I also enjoy spending time with my girlfriend and our cat playing in our home. I also enjoy going on trips for vacation and exploring new places.
                </p>
            </div>
        </div>
        );
    };

export default HomePage;