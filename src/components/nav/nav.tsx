"use client";

import Style from "./nav.module.css";
import Nav_details from "./nav_Details/nav_details";
import { FaHamburger } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { AllApiHandler } from "@/utils/redux/Slices/slice";

import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const Nav = () => {
  const router = useRouter();
  const NextAuthSession = useSession();
  const dispatch = useDispatch();
  const loggedApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = loggedApi?.loggedUser;
  const [flag, setFlag] = useState(false);
  const windowEvent = () => {
    window.addEventListener("click", () => {
      setFlag(false);
    });
  };

  const logOut = async () => {
    try {
      if (NextAuthSession?.status == "authenticated") {
        signOut({ redirect: true, callbackUrl: "/ " });
        toast.success("auth Logout successful!");
      } else {
        const logout = await axios.get("/pages/api/user/logout");
        if (logout?.data.success) {
          toast.success("Logout successful!");
          router.push("/");
          router.refresh();
        } else {
          toast.success("Logout not successful!");
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    windowEvent();
    dispatch(AllApiHandler());
  }, []);

  return (
    <nav className=" sticky top-0 backdrop:filter backdrop-blur-xl z-50">
      <div className=" h-24 flex items-center justify-between">
        <div className="">
          <button
            onClick={(e) => {
              e.stopPropagation(), setFlag(!flag);
            }}
            className=" lg:hidden"
          >
            <FaHamburger
              size={25}
              className={`${!flag ? " text-white" : "text-red-600"}`}
            />
          </button>
          <div className=" max-lg:hidden">
            <motion.h1
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className=" text-2xl text-red-600 font-extrabold">
                Hirock
              </span>{" "}
              <span>Portfolio</span>
              <span className="text-red-500">.</span>
            </motion.h1>
          </div>
        </div>
        <div className=" lg:hidden">
          {/* ------------------ */}
          {loggedUser! == undefined ? (
            <div className="lg:hidden">
              <motion.h1
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <span className=" text-2xl text-red-600 font-extrabold">
                  Hirock
                </span>{" "}
                <span>Portfolio</span>
                <span className="text-red-500">.</span>
              </motion.h1>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle "
              >
                {loggedUser ? (
                  <div
                    className={` w-10 flex items-center justify-center relative rounded-full`}
                  >
                    <div className=" loading loading-ring loading-lg"></div>
                    <Image
                      alt="Logo"
                      src={loggedUser?.userImage.toString()}
                      width={500}
                      height={500}
                      className=" w-5 h-5 absolute rounded-full"
                    />
                  </div>
                ) : (
                  <div className="">login</div>
                )}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={`/user/profile`} className="">
                    <CgProfile
                      size={25}
                      className=" cursor-pointer select-none "
                    />
                    <div className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href={"#"} className="">
                    <RxDashboard
                      size={25}
                      className=" cursor-pointer select-none "
                    />
                    <div className="justify-between">
                      Dashboard
                      <span className="badge">New</span>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link href={"#"}>
                    <CiSettings
                      size={25}
                      className=" cursor-pointer select-none "
                    />
                    <div className="">Settings</div>
                  </Link>
                </li>

                {!loggedUser ? (
                  <li>
                    <Link href={"/user/login"}>
                      <CiLogin
                        size={25}
                        className=" cursor-pointer select-none "
                      />
                      <div className="">Login</div>
                    </Link>
                  </li>
                ) : null}
                {loggedUser ? (
                  <li
                    onClick={() => {
                      logOut();
                    }}
                  >
                    <button>
                      <IoIosLogOut size={25} className=" " />
                      <div className="">Logout</div>
                    </button>
                  </li>
                ) : null}

                {/* ------------------------------------------- */}
              </ul>
            </div>
          )}
          {/* ----------------------- */}
        </div>

        <div className=" max-lg:hidden ">
          <Nav_details user={loggedUser} />
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            !flag ? " max-lg:-translate-x-full" : " max-lg:translate-x-0"
          } max-lg:-translate-x-full max-lg:shadow-sm max-lg:shadow-white lg:hidden   max-lg:fixed max-lg:top-24 max-lg:left-0 max-lg:transition-all max-lg:bg-slate-800 `}
        >
          <div
            className={` ${Style.SideNav} max-lg:overflow-y-scroll max-lg:h-[50vh]`}
          >
            <Nav_details user={loggedUser} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
