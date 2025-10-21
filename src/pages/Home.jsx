import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../pages/PageTransition'; 
import '../styles/Home.css';
import img1 from '../assets/img1.png';

import Contact from './Contact';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Portfolio from './Portfolio';

const WORD_LIST = [
  'Financial Specialist',
  'Full-stack Developer',
  'Graphic designer',
  'Digital Marketer'
];

const SOCIALS = [
  { href: 'https://www.linkedin.com/in/youssef-hmaidi-a25aab257/', label: 'linkedin', icon: 'fa-brands fa-linkedin' },
  { href: 'https://instagram.com', label: 'Instagram', icon: 'fa-instagram' },
  { href: 'https://github.com/youssefhmaidi292', label: 'GitHub', icon: 'fa-github' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
      delayChildren: 0.2, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(''); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [tick, setTick] = useState(0); 

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    if (!showContent) {
      return; 
    }

    let timer;
    const word = WORD_LIST[wordIndex];
    const typingSpeed = 150; 
    const deletingSpeed = 75; 
    const delay = 1500; 

    const handleType = () => {
      const currentIndex = isDeleting ? text.length - 1 : text.length + 1;

      if (isDeleting) {
        const updatedText = word.substring(0, currentIndex);
        setText(updatedText);

        if (updatedText.length === 0) {
          setIsDeleting(false);
          setWordIndex(prevIndex => (prevIndex + 1) % WORD_LIST.length);
          setTick(t => t + 1); 
        }
      } else {
        const updatedText = word.substring(0, currentIndex);
        setText(updatedText);

        if (updatedText.length === word.length) {
          timer = setTimeout(() => setIsDeleting(true), delay);
          return; 
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);

  }, [wordIndex, isDeleting, text, showContent]); 
  useEffect(() => {
    const handler = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.documentElement.classList.toggle('reduced-motion', reduced || document.hidden);
    };
    handler();
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, []);


  return (
    <> 
      <PageTransition onFinish={() => setShowContent(true)} />
      <motion.div
        initial="hidden"
        animate={showContent ? "visible" : "hidden"} 
        variants={containerVariants}
      >
        <section className="home">

          <motion.div className="homecon" variants={containerVariants}> 
            
            <motion.h2 variants={itemVariants}>
              Hello I am Youssef <span>Hmaidi</span>
            </motion.h2>

            <motion.div className="changet" variants={itemVariants}>
              <span className="changet-prefix">And I am</span>
              <span key={tick} className="changet-word" aria-label={WORD_LIST[wordIndex]}>
                {text.split('').map((ch, i) => (
                  <span
                    key={`${tick}-${i}`}
                    className={`letter typing`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                ))}
              </span> 
              <span className={`cursor ${isDeleting ? 'deleting' : 'typing'}`}>|</span>
            </motion.div>

            <motion.p variants={itemVariants}>
              Passionate about crafting clean user interfaces and scalable back-ends.
              Currently available for freelance & full-time opportunities.
            </motion.p>

            <motion.div className="info" variants={itemVariants}> 
              <div className="info-group">
                <h5>Email</h5>
                <a href="mailto:youssef.hmaidi.work@gmail.com">youssef.hmaidi.work@gmail.com</a>
              </div>
              <div className="info-group">
                <h5>Linkedin</h5>
                <a
                  href="https://www.linkedin.com/in/youssef-hmaidi-a25aab257/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/youssef-hmaidi
                </a>
              </div>
            </motion.div>

            <motion.div className="btns" variants={itemVariants}>
              <a href="/cv.pdf" download className="btn btn-primary">Download CV</a>
              <a href="#contact" className="btn btn-secondary">Hire me now!</a>
            </motion.div>
            
            <motion.nav className="social-med" aria-label="Social media links" variants={itemVariants}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <i className={`fa-brands ${s.icon}`} />
                </a>
              ))}
            </motion.nav>
          </motion.div>
          
          <motion.div className="hero-img" variants={imageVariants}>
            <div className="circle">
              <img src={img1} alt="portrait" />
            </div>
          </motion.div>
        </section> 
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </motion.div>
    </>
  );
}

export default Home;