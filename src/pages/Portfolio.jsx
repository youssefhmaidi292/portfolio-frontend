import React, { useState } from 'react'
import portfolio1 from '../port/portfolio1.png'
import GreenMode from '../port/GreenMode.png'
import restoProj from '../port/restoProj.png'
import wpProj from '../port/wpProj.png' 
import wpProj1 from '../port/wpProj1.png' 
import flayer2 from '../port/flayer2.svg'
import flayer1 from '../port/flayer1.png'
import flayer3 from '../port/flayer3.png'
import socialmed1 from '../port/socialmed1.png'
import socialmed2 from '../port/socialmed2.png'
import socialmed3 from '../port/socialmed3.png'
import logo1 from '../port/logo1.png'
import logo3 from '../port/logo3.png'
import logo4 from '../port/logo4.png'
import buscard1 from '../port/buscard1.png'
import buscard2 from '../port/buscard2.png'
import buscard12 from '../port/buscard12.png'
import buscard21 from '../port/buscard21.png'
import '../styles/Portfolio.css'

function Portfolio() {
  const GITHUB_PROFILE_LINK = "https://github.com/yourusername"
  const BEHANCE_PROFILE_LINK = "https://www.behance.net/youssefhmaidi1"

  const projects = [
    {
      title: "Portfolio Project",
      description: "Developed a full-stack personal portfolio website using React and Express, featuring project showcases, contact integration, and a responsive design.",
      stack: "React, CSS3, JavaScript",
      images: [portfolio1],
      projectType: "web",
      githubLink: "https://github.com/yourusername/portfolio-repo"
    },
    {
      title: "Full stack project",
      description: "Developed a small e-commerce website using the MERN stack, featuring product listings, shopping cart functionality, and a responsive design.",
      stack: "React, Express.js, MongoDB, Node.js",
      images: [GreenMode],
      projectType: "web",
      githubLink: "https://github.com/yourusername/ecommerce-repo"
    },
    {
      title: "Frontend Project",
      description: "Developed a responsive restaurant website using HTML, CSS, and JavaScript, featuring an interactive menu, contact form, and modern design to enhance user experience.",
      stack: "HTML5, CSS3, JavaScript",
      images: [restoProj],
      projectType: "web",
      githubLink: "https://github.com/youssefhmaidi292/projetrestaurant"
    },
    {
      title: "WordPress E-commerce Project",
      description: "Built a modern and responsive e-commerce website using WordPress and WooCommerce, showcasing products, shopping cart functionality, and secure checkout integration.",
      stack: "WordPress, WooCommerce",
      images: [wpProj],
      projectType: "web",
      videoLink: "https://youtu.be/4huciausyQ8"
    },
    {
      title: "WordPress E-commerce Project",
      description: "Built a modern and responsive e-commerce website using WordPress and WooCommerce, showcasing products, shopping cart functionality, and secure checkout integration.",
      stack: "WordPress, WooCommerce",
      images: [wpProj1],
      projectType: "web",
      videoLink: "https://youtu.be/azPAuh1-Xh4"
    },
    {
      title: "Flyer & Poster Design",
      description: "These are sample flyer and poster designs I created to practice layout, branding, and visual impact. Each piece highlights a different style and purpose, showing my versatility in graphic design.",
      stack: "Illustrator",
      images: [flayer1, flayer2, flayer3],
      projectType: "design",
      behanceLink: BEHANCE_PROFILE_LINK
    },
    {
      title: "Social Media Post",
      description: "These posts show different design styles: a product ad with a discount offer, an Eid greeting with traditional elements, and a bold Nike-inspired sports ad. Each design is tailored to its message and audience.",
      stack: "Photoshop",
      images: [socialmed1, socialmed2, socialmed3],
      projectType: "design",
      behanceLink: BEHANCE_PROFILE_LINK
    },
    {
      title: "Logo Design",
      description: "These logo designs represent different creative directions I explored for the project. Each one reflects the brand's identity through unique shapes, colors, and typography. I aimed to create logos that are simple, memorable, and adaptable across different uses like print, web, and social media.",
      stack: "Adobe Illustrator, Canva",
      images: [logo1,  logo3, logo4],
      projectType: "design",
      behanceLink: BEHANCE_PROFILE_LINK
    },
    {
      title: "Business Card",
      description: "These cards show different layout styles for branding, combining typography, logo placement, and minimalist color schemes.",
      stack: "Adobe Illustrator",
      images: [buscard1, buscard12, buscard2, buscard21],
      projectType: "design",
      behanceLink: BEHANCE_PROFILE_LINK
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeProject = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsFading(false);
    }, 500);
  };

  const nextProject = () => {
    changeProject(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);
  };

  const prevProject = () => {
    changeProject(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  };

  const currentProject = projects[currentIndex];

  const renderProjectLink = () => {
    if (currentProject.projectType === "web" && currentProject.githubLink) {
      return (
        <a
          href={currentProject.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icon-link"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      );
    } else if (currentProject.projectType === "design" && currentProject.behanceLink) {
      return (
        <a
          href={currentProject.behanceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-icon-link"
        >
          <i className="fa-brands fa-square-behance"></i>
        </a>
      );
    } else if (currentProject.videoLink) {
      return (
        <a
          href={currentProject.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-demo-btn"
        >
          🎥 Watch Demo
        </a>
      );
    }
    return null;
  };

  return (
    <div className='por'>
      <h2 className="section-title">My Projects</h2>
      <div className='portfolio'>
        <div className='portfolio-left'>
          <h1>{currentProject.title}</h1>
          <p>{currentProject.description}</p>
          <h3>{currentProject.stack}</h3>
          <div className="project-links-container">
            {renderProjectLink()}
          </div>
        </div>

        <div className='portfolio-right'>
          <div className={`portfolio-content ${isFading ? "fade-out" : ""}`}>
            <div className={`images-gallery ${currentProject.title === "Business Card" ? "grid-2x2" : ""}`}>
              {currentProject.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${currentProject.title} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className='por21'>
            <i className="fa-solid fa-square-caret-left" onClick={prevProject}></i>
            <i className="fa-solid fa-square-caret-right" onClick={nextProject}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
