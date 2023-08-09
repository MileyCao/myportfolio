import React, { Component } from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = () => {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
        src=""
        alt="company logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Director of EXILE.SPACE</h4>
        <p className="font-bold text-2xl mt-1">EXILE.SPACE</p>
        <div className="flex space-x-2 my-2">
          {<img className="h-10 w-10 rounded-full" src="" />}
        </div>
        <p>Dec,2023 - Present</p>
        <ul className="list-disc space-y-4 ml-5 font-Lora">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
