import { useState, useEffect, useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import TechCube from './components/TechCube';
import resumePDF from './assets/General Cv.pdf';
import fitnessImage from './assets/fitness.png';  // Add this import at the top
import coffeeImage from './assets/coffee sales company.jpeg';  // Add image import
import profilePic from './assets/20220917_220553.jpg';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import CertificateCard from './components/CertificateCard';
import cipherSchoolsCert from './assets/cipherschools.png';
import rProgrammingCert from './assets/Rpg.png';
import nptelCert from './assets/NPTEL.png';
import EducationCard from './components/EducationCard';
import ContactForm from './components/ContactForm';

function ThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-6 right-6 z-[60] p-3 rounded-full bg-primary/20 backdrop-blur-sm
                hover:bg-primary/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun className="text-white text-xl" />
      ) : (
        <FaMoon className="text-white text-xl" />
      )}
    </button>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];

  // Skill categories
  const skills = {
    languages: ['C++', 'C', 'R', 'SQL', 'Python'],
    tools: ['Tableau', 'R Studio', 'MySQL', 'Pandas', 'Numpy'],
    data: ['Preprocessing', 'Statistical Analysis', 'Machine Learning'],
    soft: ['Team Leader', 'Problem Solver', 'Adaptability']
  };

  // Projects data
  const projects = [
    {
      title: 'Coffee Sales Dashboard',
      description: 'Interactive dashboard for analyzing coffee sales data',
      tech: ['Tableau', 'SQL'],
      image: coffeeImage,
      liveLink: 'https://github.com/yeswanth4903/Tableau-project-summer-training-'  // Add your Tableau Public dashboard URL
    },
    {
      title: 'Fitness Club Website',
      description: 'Responsive website for a fitness club',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: fitnessImage,  // Update this line
      liveLink: 'https://mian-ali.github.io/GymWebsite/' // Add your live link here
    }
  ];

  const certificates = [
    {
      title: 'Python, Data Science & Machine Learning Integrated',
      date: 'July 2024',
      image: cipherSchoolsCert,
      link: ''
    },
    {
      title: 'R Programming',
      date: 'April 2024',
      image: rProgrammingCert,
      link: ''
    },
    {
      title: 'Cloud Computing (NPTEL)',
      date: 'August 2024',
      image: nptelCert,
      link: ''
    }
  ];

  const education = [
    {
      school: 'Lovely Professional University',
      location: 'Punjab, India',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      grade: 'CGPA: 7.84',
      duration: 'Since August 2022',
      type: 'university'
    },
    {
      school: 'Sri Chakra Bhavan (Sri Chaitanya)',
      location: 'Vijayawada, Andhra Pradesh',
      degree: 'Intermediate',
      grade: 'Percentage: 93%',
      duration: 'April 2020 - March 2022',
      type: 'college'
    },
    {
      school: 'Viswasanthi Vidyalayam',
      location: 'Razam, Andhra Pradesh',
      degree: 'Matriculation',
      grade: 'GPA: 10',
      duration: 'April 2019 - March 2020',
      type: 'school'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-light dark:bg-dark text-gray-900 dark:text-gray-100 
                    transition-colors duration-300`}>
        <ThemeToggle />
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolling ? 'bg-dark2/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
          <div className="container mx-auto px-4 py-4 flex justify-end">
            {sections.map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="mx-4 cursor-pointer text-light hover:text-primary transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </nav>

        <section id="home" className="section section-home flex items-center justify-center min-h-[70vh] py-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-dark/50"></div>
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-left relative z-10 px-4 md:w-1/2">
              <div className="font-bold animate-glow mb-2 hover:scale-105 transition-transform">
                <h1 className="text-3xl md:text-5xl text-gray-light mb-2">
                  Kamodula
                </h1>
                <h1 className="text-3xl md:text-5xl text-gray-light">
                  Sai Yeswanth
                </h1>
              </div>
              <h2 className="text-lg md:text-xl text-primary mb-2">
                Aspiring Data Scientist & Developer
              </h2>
              <p className="mb-4 text-light/80">
                Turning data into decisions | Building smart, scalable solutions
              </p>
              <div className="space-x-4">
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors text-sm text-white"
                >
                  View Resume
                  <FaDownload className="ml-2 text-xs" />
                </a>
                <button className="border border-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-light transition-all text-sm">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <div className="transform hover:scale-105 transition-transform relative group">
                <TechCube />
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section pt--30 pb-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-light">Know Me Better</h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
              <div className="md:w-1/3">
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl mx-auto">
                  <img 
                    src={profilePic} 
                    alt="Kamodula Sai Yeswanth" 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-gray-light leading-relaxed">
                  I am a Computer Science undergraduate at Lovely Professional University, 
                  passionate about transforming data into meaningful insights and building 
                  innovative solutions.
                </p>
                <p className="text-gray leading-relaxed">
                  With hands-on experience in tools like Tableau, Python, R, and MySQL, 
                  I've developed projects ranging from data visualization dashboards to 
                  responsive websites.
                </p>
                <p className="text-gray leading-relaxed">
                  I believe in clean code, clear thinking, and collaboration—and I'm always 
                  excited to learn and build something impactful.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section py-6">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center animate-skill-pulse">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <div 
                  key={category}
                  className="relative group"
                  style={{ animationDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="bg-dark-secondary/30 backdrop-blur-sm p-6 rounded-lg 
                                transform transition-all duration-500 ease-out
                                group-hover:bg-dark-secondary/50 group-hover:scale-105
                                hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                    <h3 className="text-xl font-bold mb-6 text-primary text-center 
                                 border-b border-primary/20 pb-2">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="flex flex-wrap gap-3 justify-center">
                      {items.map((skill, index) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm
                                   transition-all duration-300 cursor-pointer
                                   transform hover:scale-110"
                          style={{
                            backgroundColor: hoveredSkill === skill ? 'rgba(255,0,0,0.2)' : 'transparent',
                            border: '1px solid rgba(255,0,0,0.3)',
                            animationDelay: `${index * 100}ms`,
                          }}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-dark 
                                opacity-0 group-hover:opacity-30 transition-opacity duration-500
                                blur-lg group-hover:animate-skill-pulse rounded-lg">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section py-8">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="project-card group">
                  <div className="aspect-video bg-gray-800 mb-4 rounded overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline mt-2 block"
                    >
                      Live Link
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="section py-8">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <CertificateCard key={index} certificate={cert} />
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section py-8">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Education Journey</h2>
            <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-4 
                      before:top-0 before:bottom-0 before:w-0.5 before:bg-primary/20">
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section py-16">
          <div className="container max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:yeswanthk4903@gmail.com" 
                     className="flex items-center gap-3 hover:text-primary transition-colors">
                    <FaEnvelope size={20} />
                    <span>yeswanthk4903@gmail.com</span>
                  </a>
                  <a href="tel:+917815840394" 
                     className="flex items-center gap-3 hover:text-primary transition-colors">
                    <FaPhone size={20} />
                    <span>+91 7815840394</span>
                  </a>
                  <div className="flex gap-6 pt-4">
                    <a href="https://linkedin.com/in/saiyeswanth-kamodula-a4577024b" 
                       className="text-primary hover:text-primary/80 transition-colors">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/yeswanth4903" 
                       className="text-primary hover:text-primary/80 transition-colors">
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
