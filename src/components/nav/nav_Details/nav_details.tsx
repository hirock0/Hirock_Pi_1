"use client";
import Style from "./nav_details.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import ModalPage from "@/components/Modal/page";
import { useState } from "react";

interface Props {
  user: object | any;
}

const Nav_details: React.FC<Props> = (user) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className=" max-lg:p-5">
      <ul
        className={`${Style.navUl}  flex max-lg:flex-col max-lg:gap-5 max-lg:items-start lg:items-center lg:gap-5`}
      >
        <Link href={"/"}>
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Home
          </motion.li>
        </Link>

        <Link href={"/info/education"}>
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Educations
          </motion.li>
        </Link>
        <Link href={"#projects"}>
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Projects
          </motion.li>
        </Link>
        <Link href={""}>
          <motion.li
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Contacts
          </motion.li>
        </Link>

        {user?.user?.email !== "hirockdutta0@gmail.com" ? null : (
          <Link href={"/admin/upload_projects"}>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Admin
            </motion.li>
          </Link>
        )}
        <span
          className={`max-lg:${user?.user !== undefined ? "hidden" : "block"}`}
        >
          <div className="lg:dropdown lg:dropdown-end ">
            <div
              tabIndex={0}
              role="lg:button"
              className="lg:btn lg:btn-ghost lg:btn-circle max-lg:w-full "
            >
              {user?.user ? (
                <motion.div
                  className={` w-10 flex items-center justify-center relative rounded-full`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3, delay: 1.3 }}
                >
                  <div
                    className={` w-10 flex items-center justify-center relative rounded-full`}
                  >
                    <div className=" loading loading-ring loading-lg"></div>
                    <Image
                      alt="Logo"
                      src={user?.user?.userImage.toString()}
                      width={500}
                      height={500}
                      className=" w-5 h-5 absolute rounded-full"
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3, delay: 1.3 }}
                  className=" max-lg:w-28 max-lg:bg-red-600 max-lg:p-1 max-lg:rounded-md max-lg:shadow max-lg:shadow-white max-lg:hover:bg-red-700 max-lg:active:bg-red-800"
                >
                  <Link
                    href={"/user/login"}
                    className=" max-lg:flex max-lg:items-center max-lg:gap-3 max-lg:w-full"
                  >
                    <CiLogin
                      size={25}
                      className=" lg:hidden cursor-pointer select-none "
                    />
                    <div className="">Login</div>
                  </Link>
                </motion.div>
              )}
            </div>
            <ul
              tabIndex={0}
              className={` max-lg:hidden lg:${
                user?.user == undefined ? " hidden" : "block"
              } menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}
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

              {!user?.user ? (
                <motion.li
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.3, delay: 1.3 }}
                >
                  <Link href={"/user/login"} className=" ">
                    <CiLogin
                      size={25}
                      className=" cursor-pointer select-none "
                    />
                    <div className="">Login</div>
                  </Link>
                </motion.li>
              ) : null}
              {user?.user ? (
                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(), setShowModal(true);
                    }}
                  >
                    <IoIosLogOut size={25} className=" " />
                    <div className="">Logout</div>
                  </button>
                </li>
              ) : null}

              {/* ------------------------------------------- */}
            </ul>
          </div>
        </span>
      </ul>
      <ModalPage
        showModal={showModal}
        setShowModal={setShowModal}
        InnerHtmlData={{ logout: `<button>Logout</button>` }}
      />
    </div>
  );
};

export default Nav_details;
