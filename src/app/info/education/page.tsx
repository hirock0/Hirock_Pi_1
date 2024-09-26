"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Educations = [
  {
    id: 0,
    title: "C.V",
    link: "/info/education/resume",
  },
];

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "XYZ University",
    year: "2020 - 2024",
    description:
      "Focused on software development, web technologies, and database systems.",
  },
  {
    degree: "High School Diploma",
    institution: "ABC High School",
    year: "2018 - 2020",
    description:
      "Graduated with honors, with a strong focus on mathematics and physics.",
  },
  // Add more education entries as needed
];

export default function Education() {
  return (
    <main className=" bg-white text-black">
      <div className="p-5">
        <div className="  bg-red-50 container mx-auto px-5">
          <div className=" flex justify-between p-5 pt-20">
            {/* ---------------------------- */}
            <div className=" grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full">
              {Educations.map((item: any, index: any) => (
                <Link href={item.link} key={index}>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index, duration: index }}
                    className=" flex flex-col items-center"
                  >
                    {/* btn-start */}
                    <div className="cursor-pointer rounded-full shadow-lg shadow-yellow-600">
                      <div className=" group  relative w-32 h-52 rounded-full overflow-hidden bg-white p-2 flex items-center justify-center ">
                        <div className="absolute flex items-center justify-center w-full h-full bg-slate-800/80 active:bg-slate-800/40 invisible group-hover:visible transition-all  ">
                          <h1 className="  text-red-500 text-xl font-extrabold  ">
                            Open
                          </h1>
                        </div>
                        <Image
                          src={"/background_images/education_imag_1.jpg"}
                          alt="me"
                          width={500}
                          height={500}
                          priority
                          className=" h-full object-cover w-full rounded-full"
                        />
                      </div>
                    </div>
                    {/* btn-end */}
                    <h1 className=" mt-5 text-xl font-extrabold">
                      {item.title}
                    </h1>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* -------------------------------------------- */}
          </div>
        </div>
      </div>
    </main>
  );
}
