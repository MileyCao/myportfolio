import React, { Component } from 'react';
import { motion } from 'framer-motion';

//const directionLeft = Boolean;
const Skill = ({ directionLeft, logoSrc }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={logoSrc}
        className="rounded-[18px] object-contain p-5 w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-white shadow-md "
      />
    </div>
  );
};

export default Skill;
