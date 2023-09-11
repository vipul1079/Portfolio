"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress=useTransform(scrollYProgress,[0,1],[0.8,1]);
  const opacityProgerss=useTransform(scrollYProgress,[0,1],[0.7,1]);

  return (
    <motion.div  ref={ref}  style={{
        scale: scaleProgress,
        opacity: opacityProgerss,
      }}
      // sm:mb-8 last:mb-0 mb-3 group
      className="sm:mb-8 last:mb-0 mb-3 group"
      >
      <section
      //  bg-gray-100 rounded-lg max-w-[45rem]  border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem]   even:pl-8 hover:bg-gray-200 transition group-even:pl-8
        className="bg-gray-100 rounded-lg max-w-[45rem]  border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem]   even:pl-8 hover:bg-gray-200 transition group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
        
      >
        {/* pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[22rem] */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem]">
          {/* text-2xl font-semibold */}
          <h3 className="text-2xl font-semibold">{title}</h3>
          {/* mt-2  leading-relaxed text-gray-700 */}
          <p className="mt-2  leading-relaxed text-gray-700 dark:text-white/70" >{description}</p>
          {/* flex flex-wrap mt-4 gap-2 sm:mt-auto */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
              // bg-black/[0.7]  px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full
                className="bg-black/[0.7]  px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* absolute hidden sm:block top-8 -right-40 h-[24.25rem] object-cover w-[28.25rem] rounded-t-lg shhadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]   group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition group-even:-right-[initial] group-even:-left-40  */}
        <Image
          className="absolute hidden sm:block top-8 -right-40 h-[24.25rem] object-cover w-[28.25rem] rounded-t-lg shhadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]   group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition group-even:-right-[initial] group-even:-left-40 "
          src={imageUrl}
          alt="Projects i Worked on"
        />
      </section>
    </motion.div>
  );
}

export default Project;
