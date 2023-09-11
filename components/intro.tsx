"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import vipulsharmapic from "@/public/vipulsharmapic.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-selection-context";
import { useSectionInView } from "@/lib/hooks";
const Intro = () => {

  const {ref} = useSectionInView("Home",0.8);
  const {setActiveSection,setTimeOfLastClick}=useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <Image
              className="h-24 w-24 border-[0.35rem] object-cover border-white shadow-xl rounded-full"
              
              priority={true}
              quality={95}
              src={vipulsharmapic}
              alt="intro-pic"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0  text-4xl "
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Vipul.</span> I'm a{" "}
        <span className="font-bold">full-stack developer.</span> I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}

        className="flex flex-col sm:flex-row gap-5 text-lg font-medium  justify-center items-center"
      >
        <Link
          className="group bg-gray-900 text-white p-4  flex items-center gap-2 rounded-full focus:scale-[1.15] hover:bg-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack outline-none "
          href="#contact"
          onClick={()=>{

            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className=" bg-white border-black/10 p-4 group outline-none text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 "
          href="/CV.pdf" download
        >
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/vipul-sharma-a4370b194" target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/vipul1079" target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
