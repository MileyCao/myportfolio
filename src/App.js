import Navbar from './scenes/Navbar';
import { useEffect, useState } from 'react';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import WorkExperience from './scenes/WorkExperience';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import LineGradient from './components/LineGradient';
import Footer from './scenes/Footer';
import Contact from './scenes/Contact';

import useMediaQuery from './hooks/useMediaQuery';
import { motion } from 'framer-motion';

function App() {
  const [selectedPage, setSelectedPage] = useState('');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 1060px)');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('');
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
        //setSelectedPage(selectedPage);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-cream">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('work')}
        >
          <WorkExperience />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <MySkills />
        </motion.div>
      </div>
      {/** 
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <Projects />
        </motion.div>
      </div>*/}
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('contact')}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
