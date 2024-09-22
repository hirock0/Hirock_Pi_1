import React from "react";
import { IoFlashOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { SlSupport } from "react-icons/sl";
import { GoCheck } from "react-icons/go";
import Marquee from "react-fast-marquee";
import TypingText from "@/components/homePage/text_animation/typingText";
import AllProjects from "@/components/homePage/allProjects/allProjects";
import { TbBrandHtml5 } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbBrandRedux } from "react-icons/tb";
const Home = () => {
  return (
    <main className=" pb-52">
      <div className="">
        {/* section_1_start */}
        <div className=" parallax bg-fixed bg-center lg:bg-top bg-no-repeat bg-cover pt-20 max-sm:pt-10 ">
          {/* ------------------------------------------ */}
          <div className="container mx-auto px-5 pb-10 ">
            <div className=" ">
              <h1 className="text-center text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl font-semibold ">
                All in One
              </h1>
              <h1 className=" mt-5 max-sm:mt-0 text-center text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-2xl font-semibold ">
                Personal Portfolio for
              </h1>
            </div>
            {/* ----------------- */}
            <div className=" mt-5 flex justify-center">
              <TypingText />
            </div>
            {/* ---------------------------------------------------------------------------------- */}
            <div className=" mt-32 max-sm:mt-20 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
              {/* card_1_start */}
              <div className=" shadow shadow-slate-600 bg-gradient-to-tl to-slate-800 via-slate-950 from-slate-800 cursor-pointer h-96 bg-base-300 rounded-lg hover:bg-gradient-to-tr hover:to-slate-800 hover:via-slate-950 hover:from-slate-800">
                <div className=" sm:hover:scale-110 hover:transition-all p-10 w-full h-full ">
                  <IoFlashOutline size={52} className=" text-red-600" />
                  <h1 className="  text-2xl mt-5">Fast Performance</h1>
                  <p className=" text-slate-400 mt-5 max-sm:text-sm">
                    Optimized for a smaller build size, faster dev compilation
                    and dozens of other improvements.
                  </p>
                </div>
              </div>
              {/* card_1_end */}
              {/* ----------------------- */}
              {/* card_2_start */}
              <div className="shadow shadow-slate-600 bg-gradient-to-tl to-slate-800 via-slate-950 from-slate-800 cursor-pointer h-96 bg-base-300 rounded-lg hover:bg-gradient-to-tr hover:to-slate-800 hover:via-slate-950 hover:from-slate-800">
                <div className=" sm:hover:scale-110 hover:transition-all p-10 w-full h-full ">
                  <CiMobile2 size={52} className=" text-red-600" />
                  <h1 className="  text-2xl mt-5">Perfect Responsive</h1>
                  <p className=" text-slate-400 mt-5 max-sm:text-sm">
                    Our theme is full Perfect for all device. You can visit our
                    theme all device easily.
                  </p>
                </div>
              </div>
              {/* card_2_end */}
              {/* ------------------------- */}
              {/* card_3_start */}
              <div className="shadow shadow-slate-600 bg-gradient-to-tl to-slate-800 via-slate-950 from-slate-800 cursor-pointer h-96 bg-base-300 rounded-lg hover:bg-gradient-to-tr hover:to-slate-800 hover:via-slate-950 hover:from-slate-800">
                <div className=" sm:hover:scale-110 hover:transition-all p-10 w-full h-full ">
                  <SlSupport size={52} className=" text-red-600" />
                  <h1 className="  text-2xl mt-5">Fast & Friendly Support</h1>
                  <p className=" text-slate-400 mt-5 max-sm:text-sm">
                    We are provide 24 hours support for all clients.You can
                    purchase without hesitation.
                  </p>
                </div>
              </div>
              {/* card_3_end */}
            </div>
            {/* -------------------------------------------------------------------------------------------------- */}

            {/* ----------------------------------------------- */}
          </div>
          {/* ---------------------------------------- */}
          <div className=" mt-20 pb-10 overflow-hidden">
            <Marquee autoFill pauseOnClick className=" cursor-pointer">
              <ul className=" flex items-center gap-10  ">
                <li className=" flex gap-2 items-center ml-10">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span>Responsive & Retina</span>
                </li>
                <li className=" flex gap-2 items-center ">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span>30+ Custom Elements</span>
                </li>
                <li className=" flex gap-2 items-center ">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span>t’s Super Fast</span>
                </li>
                <li className=" flex gap-2 items-center ">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span>One-click Demo Import</span>
                </li>
                <li className=" flex gap-2 items-center ">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span>Fully Customizable</span>
                </li>
                <li className=" flex gap-2 items-center ">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span>SEO Optimized</span>
                </li>
                <li className=" flex gap-2 items-center ">
                  <div className=" bg-green-600 rounded-full p-1">
                    <GoCheck className=" " size={16} />
                  </div>
                  <span> High Quality Support</span>
                </li>
              </ul>
            </Marquee>
          </div>
          {/* -------------------------------------------- */}
        </div>
        {/* section_1_end */}
        {/* --------------------------------------- */}
        {/* section_2_start */}
        <div id="projects" className=" mt-10 container mx-auto px-5">
          {/* All_proJect_start */}
          <AllProjects />
          {/* All_proJect_end */}
        </div>
        {/* section_2_end */}
        {/* --------------------------------------------- */}

        {/* section_3_start */}

        <div className=" mt-10">
          <h1 className="  text-center text-4xl max-md:text-3xl max-sm:text-2xl">
            Skills
          </h1>
          <div className=" mt-10 flex items-center  ">
            {/* -------------------------------------------- */}
            <div className=" mt-5 overflow-hidden ">
              <Marquee pauseOnClick>
                <div className=" flex items-center  lg:gap-36 max-lg:gap-28 max-md:gap-20 max-sm:gap-10">
                  {/* skill_1_start */}
                  <div className=" overflow-hidden cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg lg:ml-36 max-lg:ml-28 max-md:ml-20 max-sm:ml-10">
                    <TbBrandHtml5 className=" scale-image w-full h-full text-red-600" />
                  </div>
                  {/* skill_1_end */}
                  {/* skill_2_start */}
                  <div className=" cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg">
                    <IoLogoCss3 className=" w-full h-full text-cyan-600" />
                  </div>
                  {/* skill_2_end */}
                  {/* skill_3_start */}
                  <div className=" overflow-hidden  cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg">
                    <IoLogoJavascript className=" scale-image w-full h-full text-yellow-600" />
                  </div>
                  {/* skill_3_end */}
                  {/* skill_4_start */}
                  <div className=" overflow-hidden  cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg">
                    <FaReact className=" rotating-image w-full h-full text-cyan-400" />
                  </div>
                  {/* skill_4_end */}

                  {/* skill_5_start */}
                  <div className=" overflow-hidden cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg">
                    <RiNextjsLine className=" scale-image w-full h-full text-red-600" />
                  </div>
                  {/* skill_5_end */}

                  {/* skill_6_start */}
                  <div className=" cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg">
                    <DiMongodb className=" w-full h-full text-green-400" />
                  </div>
                  {/* skill_6_end */}

                  {/* skill_7_start */}
                  <div className=" overflow-hidden  cursor-pointer h-52 w-52 bg-gradient-to-tr to-cyan-950 via-zinc-950 from-slate-900 shadow shadow-slate-600 rounded-lg">
                    <TbBrandRedux className=" rotating-image w-full h-full text-purple-600" />
                  </div>
                  {/* skill_7_end */}
                </div>
              </Marquee>
            </div>

            {/* --------------------------------------------- */}
          </div>
        </div>
        {/* section_3_end */}
      </div>
    </main>
  );
};

export default Home;
