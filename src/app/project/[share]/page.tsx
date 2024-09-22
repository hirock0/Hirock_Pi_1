"use client";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Like_comment_share from "@/components/homePage/allProjects/likeCommentShare/like_comment_share";
import Link from "next/link";

const Projects = (props: any) => {
  const projectId = props?.params?.share.toString() || "";
  const dispatch = useDispatch();
  const allApi = useSelector((state: any) => state?.Slice);
  const allProjects = allApi?.data?.projects;

  const findProduct = allProjects?.filter(
    (item: any) => item?._id == projectId
  );

  useEffect(() => {
    dispatch(AllApiHandler());
  }, []);

  return (
    <div className=" p-5 pb-20">
      <div className="  max-sm:w-full sm:w-5/6 md:w-5/6 lg:w-4/6 mx-auto">
        {findProduct?.map((item: any, index: any) => (
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
    </div>
  );
};

export default Projects;
