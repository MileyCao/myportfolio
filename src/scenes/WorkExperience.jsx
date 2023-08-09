import React, { Component } from 'react';
import { motion } from 'framer-motion';
import images from '../assets';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] font-Montserrat text-2xl text-black-600">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#C95D63]/80">
        <article
          className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#DCEBF9BA] hover:opacity-100 opacity-50
        cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
            src={images.exileLogo}
            alt="company logo"
          />
          <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light">Director of Exile Space</h4>
            <a
              className="font-bold text-xl mt-1"
              href="https://exile.space/"
              target="_blank"
            >
              EXILE.SPACE
            </a>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={images.shopify}
              />
              <img className="h-10 w-10 rounded-full" src={images.figma} />
            </div>
            <p className="uppercase py-5 text-black-300">Dec,2022 - Present</p>
            <ul className="list-disc space-y-4 ml-5 font-Lora">
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
            </ul>
          </div>
        </article>
        <article
          className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#DCEBF9BA] hover:opacity-100 opacity-50
        cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
            src={images.bcLogo}
            alt="box clever logo"
          />
          <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light">Junior Front End Developer</h4>
            <a
              className="font-bold text-xl mt-1"
              href="https://exile.space/"
              target="_blank"
            >
              Box Clever
            </a>
            <div className="flex space-x-2 my-2">
              <img className="h-10 w-10 rounded-full" src={images.php} />
              <img className="h-10 w-10 rounded-full" src={images.javascript} />
            </div>
            <p className="uppercase py-5 text-black-300">
              June,2022 - July,2023
            </p>
            <ul className="list-disc space-y-4 ml-5 font-Lora overflow-y-auto max-h-60">
              <li>
                Developed high‑quality and responsive websites for diverse
                sectors, including non‑profit organizations, municipal towns,
                businesses, and schools via their own CMS using PHP, Jquery,
                CSS, JavaScript, and HTML.
              </li>
              <li>
                Collaborated with designers, account managers, and developers
                with testing and debugging to perform multiple tasks effectively
                and resulting in streamlined project workflows
              </li>
              <li>
                Implemented engaging new features, layouts, and animations,
                resulting in improved user engagement and an 18% increase in
                average session duration and driving over 20,000 traffic on one
                site monthly.
              </li>
              <li>
                Developed custom themes and templates, enabling efficient site
                customization and empowering clients to manage their content
                effectively without extensive technical knowledge.
              </li>
              <li>
                Upheld web accessibility standards in all projects, stayed
                up‑to‑date with emerging web development trends
              </li>
            </ul>
          </div>
        </article>
        <article
          className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#DCEBF9BA] hover:opacity-100 opacity-50
        cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
            src={images.exileLogo}
            alt="company logo"
          />
          <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light">Director of Exile Space</h4>
            <a
              className="font-bold text-xl mt-1"
              href="https://exile.space/"
              target="_blank"
            >
              EXILE.SPACE
            </a>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={images.shopify}
              />
              <img className="h-10 w-10 rounded-full" src={images.figma} />
            </div>
            <p className="uppercase py-5 text-black-300">Dec,2022 - Present</p>
            <ul className="list-disc space-y-4 ml-5 font-Lora">
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
            </ul>
          </div>
        </article>
        <article
          className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#DCEBF9BA] hover:opacity-100 opacity-50
        cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
            src={images.exileLogo}
            alt="company logo"
          />
          <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light">Director of Exile Space</h4>
            <a
              className="font-bold text-xl mt-1"
              href="https://exile.space/"
              target="_blank"
            >
              EXILE.SPACE
            </a>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={images.shopify}
              />
              <img className="h-10 w-10 rounded-full" src={images.figma} />
            </div>
            <p className="uppercase py-5 text-black-300">Dec,2022 - Present</p>
            <ul className="list-disc space-y-4 ml-5 font-Lora">
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
            </ul>
          </div>
        </article>
        <article
          className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#DCEBF9BA] hover:opacity-100 opacity-50
        cursor-pointer transition-opacity duration-200 overflow-hidden"
        >
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
            src={images.exileLogo}
            alt="company logo"
          />
          <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light">Director of Exile Space</h4>
            <a
              className="font-bold text-xl mt-1"
              href="https://exile.space/"
              target="_blank"
            >
              EXILE.SPACE
            </a>
            <div className="flex space-x-2 my-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={images.shopify}
              />
              <img className="h-10 w-10 rounded-full" src={images.figma} />
            </div>
            <p className="uppercase py-5 text-black-300">Dec,2022 - Present</p>
            <ul className="list-disc space-y-4 ml-5 font-Lora">
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
              <li>Summary Points</li>
            </ul>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
