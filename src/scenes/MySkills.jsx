import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import Skill from './Skill';
import images from '../assets';
import { motion } from 'framer-motion';

const MySkills = () => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  return (
    <section id="skills" name="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-Montserrat font-semibold text-2xl md:text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          {/** 
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>*/}
        </motion.div>
      </div>
      {/* Tech SKILLS */}
      <div className="grid grid-cols-4 gap-5 mt-[32px]">
        <Skill logoSrc={images.reactIcon} logoName={'React'} />
        <Skill logoSrc={images.javascript} logoName={'JavaScript'} />
        <Skill logoSrc={images.typescript} logoName={'TypeScript'} />
        <Skill logoSrc={images.reduxIcon} logoName={'Redux'} />
        <Skill logoSrc={images.python} logoName={'Python'} />
        <Skill logoSrc={images.sass} logoName={'SASS'} />
        <Skill logoSrc={images.css3} logoName={'CSS3'} />
        <Skill logoSrc={images.html} logoName={'HTML'} />
        <Skill
          directionLeft={true}
          logoSrc={images.reactIcon}
          logoName={'React Native'}
        />
        <Skill
          directionLeft={true}
          logoSrc={images.nodejs}
          logoName={'NodeJS'}
        />
        <Skill directionLeft={true} logoSrc={images.php} logoName={'PHP'} />
        <Skill
          directionLeft={true}
          logoSrc={images.docker}
          logoName={'Docker'}
        />
        <Skill
          directionLeft={true}
          logoSrc={images.android}
          logoName={'Android Studio'}
        />
        <Skill directionLeft={true} logoSrc={images.java} logoName={'Java'} />
      </div>
    </section>
  );
};

export default MySkills;
