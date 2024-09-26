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
  {
    id: 1,
    title: "Course Certificate",
    link: "/info/education/resume",
  },
  {
    id: 2,
    title: "Company Testimonial",
    link: "/info/education/resume",
  },
  {
    id: 3,
    title: "Company Testimonial",
    link: "/info/education/resume",
  },
];

export default function Education() {
  return (
    <main className=" ">
      <div className=" container mx-auto px-5">
        <div className=" flex justify-between p-5 max-sm:p-0 max-sm:py-5 pt-5">
          {/* ---------------------------- */}
          <div className=" grid grid-cols-4 max-md:grid-cols-2 gap-5  w-full">
            {Educations.map((item: any, index: any) => (
              <Link href={item.link} key={index}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index, duration: index }}
                  className=" flex flex-col items-center"
                >
                  {/* btn-start */}
                  <div className=" animate-pulse cursor-pointer rounded-full shadow-lg shadow-yellow-600">
                    <div className=" group  relative w-32 h-52 max-sm:w-28 rounded-full overflow-hidden bg-white p-2 flex items-center justify-center ">
                      <div className="absolute flex items-center justify-center w-full h-full bg-slate-800/80 active:bg-slate-800/40 invisible group-hover:visible transition-all  ">
                        <h1 className="  text-red-500 text-xl font-extrabold  ">
                          Open it
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
                  <h1 className=" text-center mt-5  font-extrabold">
                    {item.title}
                  </h1>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* -------------------------------------------- */}
        </div>
        {/* ------------------------- */}
        {/* ----------------------- */}
        <div className=" flex gap-5 lg:gap-10 max-lg:flex-col-reverse mt-10 pb-20 ">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className=" w-1/2 max-lg:w-full max-lg:mt-5 leading-7"
          >
            <h1 className=" text-center text-xl font-semibold">My Dream</h1>
            <p className="mt-5 max-sm:text-sm">
              As a full-stack web developer, I possess a comprehensive skill set
              that enables me to design, develop, and deploy dynamic web
              applications. My expertise spans both front-end and back-end
              technologies, allowing me to create seamless user experiences and
              robust server-side functionalities. On the front end, I am
              proficient in HTML, CSS, and JavaScript, with a strong focus on
              modern frameworks like React and Next.js. I leverage Tailwind CSS
              and DaisyUI to craft responsive, visually appealing interfaces
              that enhance user engagement. My understanding of UX/UI principles
              ensures that I create intuitive designs that meet user needs. On
              the back end, I am experienced with Node.js and Express.js,
              utilizing Mongoose for efficient database management. I build
              scalable APIs and implement secure data handling practices,
              ensuring that applications are robust and maintainable. I am also
              adept at using TypeScript for type safety and improved code
              quality, as well as integrating state management solutions like
              Redux Toolkit to manage application state effectively. With a
              passion for problem-solving and a commitment to continuous
              learning, I stay updated with the latest industry trends and best
              practices, allowing me to deliver high-quality, innovative
              solutions. My collaborative nature enables me to work effectively
              in team settings, contributing to projects from conception to
              deployment.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className=" w-1/2 max-lg:w-full shadow-xl shadow-yellow-600 rounded-md flex justify-center items-center "
          >
            <Image
              priority
              src={"/education/hirock_boss.jpeg"}
              alt=""
              width={500}
              height={500}
              className=" rounded-md shadow-md shadow-slate-600  w-full h-full object-cover bg-white p-2"
            />
          </motion.div>
        </div>
        {/* ----------------- */}
      </div>
    </main>
  );
}
