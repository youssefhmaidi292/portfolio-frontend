import React from 'react';
import express  from '../assets/express.png';
import mongodb  from '../assets/mongodb.jpg';
import photoshop from '../assets/photoshop.png';
import illustrator from '../assets/illustrator.png';
import canva from '../assets/canva.png';
import Scroll from './Scroll';
import '../styles/Skills.css';
import { motion } from 'framer-motion';   



const data = [
  { cls: 'skill',  content: <><i className="fa-brands fa-html5"/><p>Good knowledge of semantic tags…</p></> },
  { cls: 'skill1', content: <><i className="fa-brands fa-css3"/><p>Comfortable with styling…</p></> },
  { cls: 'skill',  content: <><i className="fa-brands fa-js"/><p>Solid grasp of basics…</p></> },
  { cls: 'skill1', content: <><i className="fa-brands fa-node"/><p>Learning to build…</p></> },
  { cls: 'skill',  content: <><img src={express} alt="Express"/><p>Able to create basic routes…</p></> },
  { cls: 'skill1', content: <><i className="fa-brands fa-github"/> <i className="fa-brands fa-git-alt"/><p>Able to track changes…</p></> },
  { cls: 'skill',  content: <><i className="fa-brands fa-react"/><p>Understands core concepts…</p></> },
  { cls: 'skill1', content: <><img src={mongodb} alt="MongoDB"/><p>Intermediate level…</p></> },
  { cls: 'skill', content: <><i class="fa-brands fa-wordpress"></i><p>Builds sites with WordPress.</p></> },
  { cls: 'skill1',  content: <><i className="fa-brands fa-python"/><p>Comfortable with basics…</p></> },
  { cls: 'skill', content: <><i className="fa-solid fa-file-excel"/><p>Strong knowledge of formulas…</p></> },
  { cls: 'skill1',  content: <><img src={photoshop} alt="PS"/><p>Able to create and edit…</p></> },
  { cls: 'skill', content: <><img src={illustrator} alt="AI"/><p>Can design vector graphics…</p></> },
  { cls: 'skill1',  content: <><img src={canva} alt="Canva"/><p>Able to design clean…</p></> },
  { cls: 'skill', content: <><i className="fa-brands fa-figma"/><p>Comfortable with wire-framing…</p></> },
  
];

function Skills() {
  return (
    <div className="sk">
        <h1 className="section-title">My Skills</h1>
      <div className="skills">
        <Scroll stagger={0.15}>
  {data.map((d, i) => (
    <motion.div
      key={i}
      className={d.cls}         
      variants={{ hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } }}
    >
      {d.content}
    </motion.div>
  ))}
</Scroll>
      </div>
    </div>
  );
}
export default Skills;