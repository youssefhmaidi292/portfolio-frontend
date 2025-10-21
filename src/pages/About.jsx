import img3 from '../assets/img3.png'; 
import '../styles/About.css'

function About() {
  return (
    <div className='ab'>
    <div className="about">
      <div className="img-about">
        <img src={img3} alt="About me" />
        <div className="info-about1">
          <span>20+</span>
          <p>Project completed</p>
        </div>
        <div className="info-about2">
          <span>5+</span>
          <p>Happy clients</p>
        </div>
      </div>
      <div className="about-c">
        <span>Let me introduce myself</span>
        <h2>About me</h2>
        <p>
          I am Youssef Hmaidi, a Business Administration graduate in Finance with a passion for web development, graphic design, and digital marketing. I enjoy building full-stack applications, creating engaging user interfaces, and delivering impactful solutions.
        </p>
        <div className="btns">
          <a href="contact" className="aboutbtn">Hire me</a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
