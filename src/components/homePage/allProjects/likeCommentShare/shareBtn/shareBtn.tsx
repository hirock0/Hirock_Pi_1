"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosShareAlt } from "react-icons/io";
interface Props {
  item: object | any;
}
const ShareBtn: React.FC<Props> = ({ item }) => {
  const [onShareFlag, setOnShareFlag] = useState(false);
  const onShare = async () => {
    try {
      if (navigator.cookieEnabled) {
        await navigator.clipboard.writeText(
          `${window.location.href}project/${item._id}`
        );
        toast.success("copied successful");
        setTimeout(() => {
          setOnShareFlag(false);
        }, 1000);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <div className=" w-full ">
      <button onClick={() => setOnShareFlag(!onShareFlag)}>
        <IoIosShareAlt size={25} />
      </button>

      <div
        onClick={() => setOnShareFlag(false)}
        className={`${
          !onShareFlag ? "hidden" : "block"
        } bg-slate-800 z-30 text-white fixed top-0 h-full w-full flex flex-col gap-5 items-center justify-center left-0 `}
      >
        <h1>{item?.projectTitle}</h1>
        <button
          onClick={(e) => {
            onShare(), e.stopPropagation();
          }}
          className=" shadow shadow-white p-5 rounded-md hover:bg-red-700 bg-red-600 active:bg-red-800 active:text-yellow-600 "
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
};

export default ShareBtn;
