"use client";
import Image from "next/image";
import Link from "next/link";
import Style from "./resume.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ModalPage from "@/components/Modal/page";
const ResumePage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, when: "beforeChildren" },
    },
  };

  const itemVariantsLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  const itemVariantsRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <main className="">
      <div
        className={`${Style.parallax} bg-fixed bg-top bg-cover bg-no-repeat`}
      >
        {/* ------------------------------------------------- */}
        <div className=" container mx-auto px-5 pb-10 ">
          {/* ------------------------- */}
          <div className=" pt-5 flex flex-col justify-center items-center w-full ">
            {/* ---------------------------------------------------- */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className=" w-fit"
            >
              {/* --------------- */}
              <div className="  flex justify-end items-center w-full  ">
                <button
                  className=" bg-red-600 px-5 max-sm:px-2 py-3 max-sm:py-2 max-sm:text-sm rounded-md  hover:bg-red-700 active:bg-red-800"
                  onClick={(e) => {
                    e.stopPropagation(), setShowModal(true);
                  }}
                >
                  Download PDF
                </button>
              </div>
              {/* ------------------ */}
              <Link
                href={"/education/hirock_resume_1.jpg"}
                target="_blank"
                className=" block bg-white p-5 max-md:p-2 mt-5  rounded-md"
              >
                <Image
                  src="/education/hirock_resume_1.jpg"
                  className=" bg-cover shadow-lg shadow-black"
                  alt="pdf"
                  width={500}
                  height={500}
                />
              </Link>
            </motion.div>
            {/* ------------------------------------------------------- */}
          </div>
          {/* -------------------------- */}
        </div>
        {/* --------------------------------------------------------------------- */}
      </div>
      {/* --------------------- */}
      <div className=" pb-20 pt-5">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className=" container mx-auto px-5 tracking-wide leading-8 "
        >
          <h1 className="text-center font-semibold text-3xl max-md:text-2xl max-sm:text-xl">
            My Passion
          </h1>
          <div className=" mt-5 grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            <motion.p
              variants={itemVariantsLeft}
              className=" bg-white text-black p-5 rounded-md"
            >
              I am a dedicated full-stack web developer with a passion for
              building dynamic and high-performance applications using
              cutting-edge technologies. My expertise lies in both front-end and
              back-end development, creating seamless user experiences and
              efficient server-side functionality.
            </motion.p>
            <motion.p
              variants={itemVariantsRight}
              className=" bg-white text-black p-5 rounded-md"
            >
              Proficient in React, Next.js, and Redux, I specialize in building
              responsive and scalable user interfaces. My knowledge of HTML,
              CSS, Tailwind CSS, and various component libraries enables me to
              design clean and modern UI elements with a focus on performance
              and accessibility.
            </motion.p>
            <motion.p
              variants={itemVariantsLeft}
              className=" bg-white text-black p-5 rounded-md"
            >
              On the server side, I work with Node.js, Express.js, and Mongoose
              to handle data management and API integration, ensuring robust and
              secure backend services. My use of TypeScript across the stack
              enhances code reliability and maintainability, enabling better
              collaboration and long-term scalability.
            </motion.p>
            <motion.p
              variants={itemVariantsRight}
              className=" bg-white text-black p-5 rounded-md"
            >
              With a comprehensive understanding of web development, I combine
              these tools with other libraries and frameworks to deliver
              full-stack solutions that meet modern web standards. I am always
              striving to stay at the forefront of technology, consistently
              refining my skills to tackle new challenges.
            </motion.p>
          </div>
        </motion.div>
      </div>
      <ModalPage
        showModal={showModal}
        setShowModal={setShowModal}
        InnerHtmlData={{
          pdfLink:
            "  <a href={'/education/hirock_resume.pdf'} download className=' '> Download PDF</a>",
        }}
      />
    </main>
  );
};

export default ResumePage;
