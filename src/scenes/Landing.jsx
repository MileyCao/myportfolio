import SocialMediaIcons from '../components/SocialMediaIcons';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ProfileImage from '../assets/avatar.png';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)');
  const [text, count] = useTypewriter({
    words: [
      'Hi, This is Miley!',
      '<A Software Dev/Eng By Day ☀️/>',
      'A Bartender By Night 🌃',
      'Power Up by Coffee ☕',
      'Cheer Up by Cocktail 🥃',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-4 before:border-dark-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="scale-80 hover:scale-100 transition  duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[60px]"
              src={ProfileImage}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[280px] md:max-w-[600px]"
            src={ProfileImage}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-4xl font-Montserrat font-semibold z-10 text-center md:text-start">
            <span>{text}</span>
            <Cursor cursorColor="#0F52BA" />
          </h2>

          <p className="font-Lora mt-10 mb-7 text-base text-center md:text-start">
            Skillfully weaving together code and cocktails with a dash of
            enthusiasm and a sprinkle of open-mindedness. The passion behind
            these efforts is evident in the innovative software solutions
            crafted and the engaging conversations stirred up.
            <br />
            Let's mix it up and create some fun, exciting, and 'byte'-ful
            experiences together!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="font-Montserrat bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href="#work"
          >
            About Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            <div className="bg-cream hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-Montserrat">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
