import React, { Component } from 'react';
import { motion } from 'framer-motion';

//const directionLeft = Boolean;
const Skill = ({ directionLeft, logoSrc, logoName }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={logoSrc}
        className="rounded-[18px] object-contain p-5 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out bg-white shadow-md "
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-[18px] z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl align-center font-bold opacity-100">
            {logoName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
