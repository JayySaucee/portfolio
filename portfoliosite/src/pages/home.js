import { useEffect } from 'react';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from '../components/gallery';

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    useEffect(() => {
        document.title = "Jorge Alejandre";
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Introduction section of the page with a photo of myself */}
            <div id="home" className="relative bg-gray-900 text-center w-full min-h-screen flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center w-full p-8">
                    <div className="flex-1 text-left p-8" data-aos="fade-right">
                        <h1 className="text-white text-8xl">Jorge Alejandre</h1>
                        <p className="text-blue-400 py-4 text-4xl">
                            <Typical
                                steps={['Turning ideas into reality', 2000, 'Building the impossible', 2000, 'Innovating for the future', 2000, 'Shaping the digital world', 2000]}
                                loop={Infinity}
                                wrapper="span"
                            />
                        </p>
                    </div>
                    <div className="flex-1 p-8" data-aos="fade-left">
                        <img src="photos/Universal.jpeg" alt="Universal Studios" className="max-w-xl max-h-md w-auto h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        
            {/* About Me section of information */}
            <div id="about" className="bg-gray-900 text-center text-white py-16">
                <h1 className="text-4xl mb-8" data-aos="fade-in">Get to know a little bit about me!</h1>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8 px-8">
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up">
                        <h2 className="text-3xl mb-4">Past</h2>
                        <p className="text-xl">
                            I am a recent graduate of Oregon State University, where I earned a Bachelors of Science in Computer Science. During my academic journey, I gained valuable experience through an internship with Captured Sun, a tech startup, where I contributed to the Parchment project as a Software Engineer Intern. My university education also provided me with a solid foundation in web and mobile development, along with essential computer science concepts.
                        </p>
                    </div>
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="text-3xl mb-4">Present</h2>
                        <p className="text-xl">
                            Currently, I am focused on honing my skills as a Software Engineer, working on various projects that involve both front-end and back-end development. I am actively engaged in learning new technologies and frameworks to stay updated with industry trends. My current role as a freelancer allows me to apply my knowledge in real-world scenarios, enhancing my problem-solving abilities and technical expertise.
                        </p>
                    </div>
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="400">
                        <h2 className="text-3xl mb-4">Future Goals</h2>
                        <p className="text-xl">
                            Looking ahead, I aspire to take on more challenging projects that push the boundaries of innovation and creativity. My goal is to become a developer who can create impactful solutions that address real-world problems. I am passionate about contributing to the tech industry and making a positive difference in people's lives through my work. I am excited about the opportunities that lie ahead and am eager to continue growing as a developer along with the tech industry.
                        </p>
                    </div>
                </div>
            </div>
        
            {/* Skills Section */}
            <div id="skills" className="bg-gray-900 text-center text-white py-8">
                <h1 className="text-4xl mb-8" data-aos="fade-in">Skills</h1>
                <div className="flex flex-wrap justify-center max-w-6xl mx-auto space-x-4">
                    <span className="bg-gray-800 p-4 rounded-lg m-1">JavaScript</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">React</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Node.js</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">SQL</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Git</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">C++</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Docker</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">MongoDB</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Google Cloud Platform</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Postman</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Python</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Figma</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">GitHub</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Debugging</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Technical Documentation</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Communication</span>
                    <span className="bg-gray-800 p-4 rounded-lg m-1">Data Structures</span>

                </div>
            </div>
        
            {/* Projects Section */}
            <div id="projects" className="bg-gray-900 text-center text-white py-10">
                <h1 className="text-4xl mb-8" data-aos="fade-in">Previous Projects</h1>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch space-y-8 md:space-y-0 md:space-x-8 px-8">
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up">
                    <a href="https://www.parchment.page/" target="_blank" rel="noopener noreferrer">
                        <img src="photos/Parchment.png" alt="Parchment Project" className="w-full h-96 object-cover rounded-lg mb-4" />
                        <h2 className="text-3xl mb-4">Parchment</h2>
                        <p className="text-xl">This project was apart of my software engineering internship where we used many of the current day technologies such as Javascript, Swift, C and C#, plus many more. The purpose of the project is to bridge together the online third party applications such as Google Docs with local device file management systems and make one seamless workspace, where both the internet and your file system are one, increasing workplace productivity and efficiency for any office space user.</p>
                    </a>    
                    </div>
                    <div className="flex-1 bg-gray-800 p-8 rounded-lg" data-aos="fade-up" data-aos-delay="200">
                    <a href="https://github.com/JayySaucee/constructionSite" target="_blank" rel="noopener noreferrer">
                        <img src="photos/Construction.jpeg" alt="Project 2" className="w-full h-96 object-cover rounded-lg mb-4" />
                        <h2 className="text-3xl mb-4">Construction Site</h2>
                        <p className="text-xl">This website is a current work in progress. It makes use of React and various libraries in order to provide a site for a local business that fulfills installation orders for local clients in the willamette valley area. The website contains business information as well as a form for contacting and requesting a quote from the business. This project has taught me more about communication skills and business customs related to freelancing for clients.</p>
                    </a>
                    </div>
                </div>
            </div>
        
            {/* Resume/CV Download Section */}
            <div id="resume" className="bg-gray-900 text-center text-white py-10">
                <h1 className="text-4xl mb-8" data-aos="fade-in">Resume/CV</h1>
                <a href="JorgeAlejandreResume.pdf" data-aos="fade-in" className="bg-gray-800 hover:bg-blue-400 text-white p-4 rounded-lg" download>Download My Resume</a>
            </div>
        
            {/* Personal Fun Fact Section */}
            <div id="fun-facts" className="bg-gray-900 text-center text-white py-4">
                <h1 className="text-4xl mb-8" data-aos="fade-in">Fun Facts</h1>
                <p className="text-2xl w-full max-w-4xl mx-auto leading-relaxed bg-gray-800 rounded p-4" data-aos="fade-up">
                    When I'm not coding, I enjoy gaming on my desktop. This can range from hero shooters such as Marvel Rivals to exploration survival games such as No Man's Sky. I am typically very open to playing any new game as well. Besides gaming, I also enjoy spending time with my girlfriend and our cat playing in our home. My cat is a 3 year old bombay who enjoys being mischievious around our home. I also enjoy going on trips for vacation and exploring new places. It is my dream to one day travel across the world and explore Europe and Asia.
                </p>
            </div>

            {/* Gallery Section */}
            <div id="gallery" className='bg-gray-900 text-center text-white'>
                <Gallery />
            </div>
        </div>
        );
    };

export default HomePage;