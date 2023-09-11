"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index:number)=>({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05*index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.8);
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28  max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center text-lg text-gray-800 gap-2">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
