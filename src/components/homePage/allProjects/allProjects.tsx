"use client";

import Link from "next/link";
import Like_comment_share from "./likeCommentShare/like_comment_share";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GrChapterNext } from "react-icons/gr";
import { GrChapterPrevious } from "react-icons/gr";
import { AllApiHandler } from "@/utils/redux/Slices/slice";

const AllProjects = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const dispatch = useDispatch();
  const reqApi = useSelector((state: any) => state?.Slice);
  const allProjects = reqApi?.data?.projects;
  const fullStackProjects = allProjects?.filter(
    (item: any) => item?.category == "full_stack"
  );
  const frontendProjects = allProjects?.filter(
    (item: any) => item?.category == "frontend"
  );
  const perPageProjects = 4;

  const averageProjectsNum = Math.floor(
    fullStackProjects?.length / perPageProjects
  );
  const sliceProjects = fullStackProjects?.slice(
    count * perPageProjects,
    perPageProjects * (count + 1)
  );
  // --------------------------------

  const averageProjectsNum2 = Math.floor(
    frontendProjects?.length / perPageProjects
  );
  const sliceProjects2 = frontendProjects?.slice(
    count2 * perPageProjects,
    perPageProjects * (count2 + 1)
  );

  // --------------------------------------

  const onNextProjects = () => {
    setCount((prev) => prev + 1);
  };
  const onPrevProjects = () => {
    setCount((prev) => prev - 1);
  };
  // ---------------------------------
  const onNextProjects2 = () => {
    setCount2((prev) => prev + 1);
  };
  const onPrevProjects2 = () => {
    setCount2((prev) => prev - 1);
  };

  useEffect(() => {
    dispatch(AllApiHandler());
  }, []);

  return (
    <div className="">
      <div>
        <h1 className=" text-center text-4xl max-md:text-3xl max-sm:text-2xl font-semibold">
          Full Stack Projects
        </h1>
        <div className=" grid grid-cols-2 gap-5 max-lg:grid-cols-1 mt-10">
          {sliceProjects?.map((item: any, index: any) => (
            <div
              key={index}
              className="  shadow-sm shadow-slate-600 rounded-lg overflow-hidden  bg-black"
            >
              <div className="  h-[500px] max-sm:h-[300px]">
                <Image
                  src={item?.projectImage}
                  priority
                  alt="project"
                  width={10000}
                  height={10000}
                  className=" object-cover w-full h-full"
                />
              </div>
              <div className=" text-center mt-5 h-[350px] px-5 ">
                <h1 className=" text-center text-xl">{item?.projectTitle}</h1>
                <p className="max-md:text-sm max-sm:text-xs mt-3 text-slate-400">
                  {item?.projectDescriptions}
                </p>
                <div className=" mt-5">
                  <Link target="_blank" href={item?.projectLink.toString()}>
                    <button className=" shadow-sm shadow-slate-600 h   w-1/2 max-sm:w-full h-10 rounded-full bg-gradient-to-l to-slate-800 via-slate-950  from-slate-800  hover:bg-gradient-to-r hover:to-slate-black hover:via-slate-900  hover:from-slate-700 active:bg-gradient-to-l hover:to-slate-black active:via-slate-900  active:from-slate-700">
                      See It
                    </button>
                  </Link>
                </div>
                {/* like+comments+share_start */}
                <div className=" max-sm:text-sm">
                  <Like_comment_share item={item} />
                </div>
                {/* like+comments+share_end */}
              </div>
            </div>
          ))}
        </div>
        {/* -------------------------------------- */}
        <div className=" mt-5 flex items-center justify-around  bg-base-100 h-20 rounded-lg">
          <button
            disabled={count < 1 ? true : false}
            onClick={() => onPrevProjects()}
          >
            <GrChapterPrevious
              size={30}
              className={`${
                count < 1 ? " opacity-50" : " opacity-100"
              } text-red-600`}
            />
          </button>
          <h1>
            Page {count + 1} out of {averageProjectsNum + 1}
          </h1>
          <button
            disabled={count > averageProjectsNum - 1 ? true : false}
            onClick={() => onNextProjects()}
          >
            <GrChapterNext
              size={30}
              className={`${
                count > averageProjectsNum - 1 ? " opacity-50" : " opacity-100"
              } text-red-600`}
            />
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------- */}
      <div className=" mt-10">
        <h1 className=" text-center text-4xl max-md:text-3xl max-sm:text-2xl font-semibold">
          Frontend Projects
        </h1>
        <div className=" grid grid-cols-2 gap-5 max-lg:grid-cols-1 mt-10">
          {sliceProjects2?.map((item: any, index: any) => (
            <div
              key={index}
              className="  shadow-sm shadow-slate-600 rounded-lg overflow-hidden  bg-black"
            >
              <div className="  h-[500px] max-sm:h-[300px]">
                <Image
                  src={item?.projectImage}
                  priority
                  alt="project"
                  width={10000}
                  height={10000}
                  className=" object-cover w-full h-full"
                />
              </div>
              <div className=" text-center mt-5 h-[350px] px-5 ">
                <h1 className=" text-center text-xl">{item?.projectTitle}</h1>
                <p className="max-md:text-sm max-sm:text-xs mt-3 text-slate-400">
                  {item?.projectDescriptions}
                </p>
                <div className=" mt-5">
                  <Link target="_blank" href={item?.projectLink.toString()}>
                    <button className=" shadow-sm shadow-slate-600 h   w-1/2 max-sm:w-full h-10 rounded-full bg-gradient-to-l to-slate-800 via-slate-950  from-slate-800  hover:bg-gradient-to-r hover:to-slate-black hover:via-slate-900  hover:from-slate-700 active:bg-gradient-to-l hover:to-slate-black active:via-slate-900  active:from-slate-700">
                      See It
                    </button>
                  </Link>
                </div>
                {/* like+comments+share_start */}
                <div className="max-sm:text-sm">
                  <Like_comment_share item={item} />
                </div>
                {/* like+comments+share_end */}
              </div>
            </div>
          ))}
        </div>
        {/* -------------------------------------- */}
        <div className=" mt-5 flex items-center justify-around  bg-base-100 h-20 rounded-lg">
          <button
            disabled={count2 < 1 ? true : false}
            onClick={() => onPrevProjects2()}
          >
            <GrChapterPrevious
              size={30}
              className={`${
                count < 1 ? " opacity-50" : " opacity-100"
              } text-red-600`}
            />
          </button>
          <h1>
            Page {count2 + 1} out of {averageProjectsNum2 + 1}
          </h1>
          <button
            disabled={count > averageProjectsNum2 - 1 ? true : false}
            onClick={() => onNextProjects2()}
          >
            <GrChapterNext
              size={30}
              className={`${
                count2 > averageProjectsNum2 - 1
                  ? " opacity-50"
                  : " opacity-100"
              } text-red-600`}
            />
          </button>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default AllProjects;
