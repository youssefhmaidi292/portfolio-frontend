import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import PageTurn from './pages/PageTurn'; 
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Nav from './pages/Nav';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation(); // ✅ add this

  return (
    <>
      <Nav />
      {/* Toast container at top level */}
      <ToastContainer position="bottom-right" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <div style={{ marginTop: '80px' }}>
                <About />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/services"
            element={
              <PageTurn>
                <Services />
              </PageTurn>
            }
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
