import React, { Component } from 'react';
import { motion } from 'framer-motion';
import images from '../assets';

const WorkExperience = ({ setSelectedPage }) => {
  const cardStyle = `relative flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-full box-border md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#DCEBF9BA] hover:opacity-100 opacity-50
  cursor-pointer transition-opacity duration-200 overflow-hidden`;

  return (
    <section id="work" name="work">
      <div className="md:flex md:justify-between md:gap-16 mt-32 ">
        <motion.div
          className="md:w-9/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h3 className="font-Montserrat font-semibold text-xl tracking-[12px] md:text-4xl mb-5 uppercase md:tracking-[20px]">
            Experience
          </h3>

          <p className="mt-10 mb-7 font-Lora leading-7 text-sm md:text-base">
            I'm a Computer Science grad from the University of Alberta. After
            graduation, I dove into a year of front-end development, crafting
            user-friendly interfaces and immersive web experiences. But life
            took some fun turns: I steered a Shopify store dedicated to all
            things snowboarding, and now, you can find me serving vibes (and
            drinks) at Fu's Repair Shop. While I mix and mingle, my love for
            coding always stays with me. So, in a nutshell? It's a mix of code,
            commerce, and cocktails. Ready to bring my diverse toolkit wherever
            the journey takes me!
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-0 mb-10 justify-evenly mx-auto items-center"
      >
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 px-0 snap-x snap-mandatory scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#C95D63]/80">
          <article className={cardStyle}>
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-16 h-16 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
              src={images.exileLogo}
              alt="company logo"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-lg md:text-2xl font-light font-Montserrat">
                Director
              </h4>
              <a
                className="font-bold text-base md:text-lg  mt-1"
                href="https://exile.space/"
                target="_blank"
              >
                EXILE.SPACE
              </a>
              <div className="flex space-x-2 mt-8 mb-2">
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-cover"
                  src={images.shopify}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.figma}
                  alt="tech stack img"
                />
              </div>
              <p className="uppercase py-5 text-black-300 text-sm md:text-base font-Montserrat">
                Dec,2022 - Present | Remote
              </p>
              <ul className="list-disc space-y-4 ml-5 font-Lora text-sm md:text-base">
                <li>
                  Directed online snowboarding/ski gear Shopify store; curated
                  independent designer brands.
                </li>
                <li>Managed Shopify platform for optimized user experience.</li>
                <li>
                  Regularly updated site with new products and sales campaign.
                </li>
                <li>Designed site visuals and marketing assets</li>
              </ul>
            </div>
          </article>
          <article className={cardStyle}>
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-16 h-16 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
              src={images.bcLogo}
              alt="box clever logo"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-lg md:text-2xl font-light font-Montserrat">
                Junior Front End Developer
              </h4>
              <a
                className="font-bold text-base md:text-lg mt-1"
                href="https://exile.space/"
                target="_blank"
              >
                Box Clever
              </a>
              <div className="flex space-x-2 mt-8 mb-2">
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.php}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 "
                  src={images.javascript}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 "
                  src={images.jquery}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 "
                  src={images.sass}
                  alt="tech stack img"
                />
              </div>
              <p className="uppercase py-5 text-black-300 text-sm md:text-base font-Montserrat">
                June,2022 - July,2023
              </p>
              <ul className="list-disc space-y-4 ml-5 font-Lora overflow-y-auto max-h-60 px-[16px] scrollbar-thin scrollbar-track-[#A8A8A8]/20 scrollbar-thumb-[#022d5f]/80 text-sm md:text-base">
                <li>
                  Developed high‑quality and responsive websites for diverse
                  sectors, including non‑profit organizations, municipal towns,
                  businesses, and schools via the CMS
                </li>
                <li>
                  Collaborated with designers, account managers, and developers
                  with testing and debugging to perform multiple tasks
                  effectively and resulting in streamlined project workflows
                </li>
                <li>
                  Implemented engaging new features, layouts, and animations,
                  resulting in improved user engagement and an 18% increase in
                  average session duration and driving over 20,000 traffic on
                  one site monthly.
                </li>
                <li>
                  Built and maintained custom themes and templates, enabling
                  efficient site customization and empowering clients to manage
                  their content effectively without extensive technical
                  knowledge.
                </li>
                <li>
                  Upheld web accessibility standards in all projects, stayed
                  up‑to‑date with emerging web development trends
                </li>
              </ul>
            </div>
          </article>
          <article className={cardStyle}>
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-16 h-16 md:w-32 md:h-32 xl:w-[200px] xl:h-[200] object-center"
              src={images.mentumLogo}
              alt="company logo"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-lg md:text-2xl font-light font-Montserrat">
                Front End Engineer Internship
              </h4>
              <a
                className="font-bold text-base md:text-lg mt-1"
                href="https://exile.space/"
                target="_blank"
              >
                Mentum Group Inc
              </a>
              <div className="flex space-x-2 mt-8 mb-2">
                <img
                  className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
                  src={images.reactIcon}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 "
                  src={images.typescript}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 "
                  src={images.reduxIcon}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.android}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 "
                  src={images.css3}
                  alt="tech stack img"
                />
              </div>
              <p className="uppercase py-5 text-black-300 text-sm md:text-base font-Montserrat">
                Sep,2021 - Mar,2022 | Toronto,ON
              </p>

              <ul className="list-disc space-y-4 ml-5 font-Lora text-sm md:text-base overflow-y-auto max-h-60 px-[16px] scrollbar-thin scrollbar-track-[#A8A8A8]/20 scrollbar-thumb-[#022d5f]/80">
                <li>
                  Built a fully Responsive Mentum Products branding website
                  using Typescript with React.
                </li>
                <li>
                  Developed new features and functionalities using React Native
                  and ReactJs, including Kiosk self‑order integration, and Ghost
                  Kitchen store maps
                </li>
                <li>
                  Fixed existing defects and refactor the code base to improve
                  the code base, optimized the codebase, and increased the
                  application loading speed by 15%.
                </li>
                <li>
                  Enhanced code quality and user experience through feedback
                  implementation in an Agile environment with UX designers and
                  Project Managers.
                </li>
                <li>
                  Streamlined issue resolution and project workflows by creating
                  thorough debug and feedback documentation on GitHub, and
                  delivering timely incremental updates.
                </li>
              </ul>
            </div>
          </article>
          <article className={cardStyle}>
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-16 h-16 md:w-32 md:h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center"
              src={images.revereLogo}
              alt="company logo"
            />
            <div className="px-0 md:px-10">
              <h4 className="text-lg md:text-2xl font-light font-Montserrat">
                Data Engineer Internship
              </h4>
              <a
                className="font-bold text-base md:text-lg mt-1"
                href="https://exile.space/"
                target="_blank"
              >
                Revere Technologies
              </a>
              <div className="flex space-x-2 mt-8 mb-2">
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.python}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.bq}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.gcp}
                  alt="tech stack img"
                />
                <img
                  className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  src={images.figma}
                  alt="tech stack img"
                />
              </div>
              <p className="uppercase py-5 text-black-300 text-sm md:text-base font-Montserrat">
                Oct,2019 - June,2020 | Edmonton,AB
              </p>

              <ul className="list-disc space-y-4 ml-5 font-Lora text-sm md:text-base overflow-y-auto max-h-60 px-[16px] scrollbar-thin scrollbar-track-[#A8A8A8]/20 scrollbar-thumb-[#022d5f]/80">
                <li>
                  Implemented rigorous quality checks for 30k Canadian housing
                  datasets via Google Cloud Platform using BigQuery, resulting
                  in a 94.8% reduction in data discrepancies.
                </li>
                <li>
                  Conducted data cleaning techniques on the housing dataset,
                  including data deduplication, missing value imputation, and
                  outlier detection, resulting in improved overall data quality
                  by 80%.
                </li>
                <li>
                  Conducted data cleaning techniques on the housing dataset,
                  including data deduplication, missing value imputation, and
                  outlier detection, resulting in improved overall data quality
                  by 80%.
                </li>
                <li>
                  Completed exploratory data analysis with the senior engineer
                  using Python to define the key metrics from 50+ housing
                  features for a price prediction model.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
