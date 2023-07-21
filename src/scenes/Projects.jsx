import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { oppacity: 0, scale: 0.8 },
  visible: { oppacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/**headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-pink">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
