"use client";

import Style from "./login.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Marquee from "react-fast-marquee";
import { FcLike } from "react-icons/fc";
import { motion } from "framer-motion";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface FormDataType {
  userName: string;
  email: string;
  password: string;
  reTypePassword: string;
  userImage: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [eye1, setEye1] = useState<boolean>(false);
  const [onPolicy, setOnPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onLogin: SubmitHandler<FormDataType> = async (data) => {
    try {
      setIsLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!res?.ok) {
        setIsLoading(false);
        toast.success("password or email incorrect");
      } else {
        setTimeout(() => {
          toast.success("Login successful!");
          router.push("/");
          router.refresh();
          setIsLoading(false);
        }, 1000);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const GoogleLogin = async () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <main className=" pb-20 pt-10 bg-slate-100 text-black ">
      <div className=" select-none">
        <Marquee>
          <div className=" flex items-center gap-3">
            <FcLike size={30} />
            <h1 className=" text-xl">Well come to Login up page</h1>
            <FcLike size={30} />
          </div>
        </Marquee>
      </div>
      <div className=" mt-10   container mx-auto  ">
        <div className="h-full flex max-lg:flex-col-reverse shadow-md shadow-slate-500 rounded-md overflow-hidden mx-5">
          {/* ---------------------------- */}
          <div
            className={`  max-lg:h-[50vh] ${Style.imageDiv} w-4/6 max-lg:w-full  `}
          >
            <p
              className={`${!onPolicy ? "hidden" : "block"} ${
                Style.PolicyDiv
              } backdrop:filter backdrop-blur-3xl text-white p-5 h-full overflow-y-scroll`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi,
              id? Magni, enim. Odio delectus nihil provident impedit in, quidem
              minus earum explicabo molestiae. Facere id voluptatum ipsa
              sapiente fugiat. Voluptate. Nihil aliquid expedita atque illum
              pariatur natus, nulla eos necessitatibus aspernatur velit facere,
              sapiente voluptatibus commodi. Corporis quod magnam minima iusto,
              at molestias velit commodi, quo, ipsum cupiditate eum aspernatur.
              Aliquam voluptatum earum vitae eos totam blanditiis repellat quam
              laboriosam! Quis minus corporis esse, iure rerum tenetur totam
              asperiores qui molestias nisi porro, natus dolorem, consequuntur
              dolores? Enim, alias ipsam. Officia perspiciatis ex ducimus totam
              quisquam, saepe maxime nemo distinctio ullam nostrum facere
              consequuntur rem praesentium consequatur corporis ipsam dicta
              iure. Maxime inventore vel temporibus dolor exercitationem
              recusandae nisi quibusdam? Dolorum sequi repudiandae illo
              accusamus suscipit quis aliquam, dolore distinctio quos id
              nesciunt, alias, tenetur quia quidem aspernatur! Odio quae
              voluptate assumenda, unde ratione ducimus fuga incidunt? Iste,
              sequi ex.
            </p>
          </div>
          {/* ------------------------------------------------- */}
          <motion.div
            className="   bg-white pb-20 pt-10 px-5 w-2/6 max-lg:w-full   "
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h1 className=" text-center text-2xl font-semibold text-red-600 ">
              Login
            </h1>
            <div className=" flex gap-3 items-center mt-5">
              <h1>Don.t have you account?</h1>
              <Link href={"/user/signup"} className=" text-blue-600">
                Sign Up
              </Link>
            </div>
            <form
              onSubmit={handleSubmit((data) => onLogin(data))}
              className="mt-5"
            >
              {/* ------------------------ */}
              <motion.div
                className=" mt-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3, duration: 1.3 }}
              >
                <h1 className="pl-2 text-slate-500">Email</h1>
                <input
                  {...register("email", { required: "Need to fill it!" })}
                  type="email"
                  name="email"
                  placeholder=" Enter your email"
                  className=" pl-2 h-12 w-full bg-transparent border outline-none rounded-lg shadow focus:border-0 focus:border-b-2"
                />
                {errors.email && (
                  <h1 className=" pl-2 text-red-500 ">
                    {errors.email.message?.toString()}
                  </h1>
                )}
              </motion.div>
              {/* -------------------------------------- */}

              <motion.div
                className=" mt-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                <h1 className="pl-2 text-slate-500">Password</h1>
                <div className=" relative flex items-center ">
                  <input
                    {...register("password", { required: "Need to fill it!" })}
                    type={`${!eye1 ? "password" : "text"}`}
                    name="password"
                    placeholder=" Enter your password"
                    className=" pl-2 h-12 w-full bg-transparent border outline-none rounded-lg shadow focus:border-0 focus:border-b-2"
                  />
                  <div
                    onClick={() => setEye1(!eye1)}
                    className=" cursor-pointer absolute right-5"
                  >
                    <IoEyeOutline
                      className={`${!eye1 ? " hidden" : " block"}`}
                      size={20}
                    />
                    <IoEyeOffOutline
                      className={`${!eye1 ? " block" : " hidden"}`}
                      size={20}
                    />
                  </div>
                </div>
                {errors.password && (
                  <h1 className=" pl-2 text-red-500 ">
                    {errors.password.message?.toString()}
                  </h1>
                )}
              </motion.div>

              {/* ----------------------------------- */}

              {/* -------------------------------- */}
              <motion.div
                className=" mt-5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2.4, duration: 2.4 }}
              >
                <button
                  type="submit"
                  className=" hover:scale-x-105 active:scale-100 bg-red-600 w-full h-10 shadow-sm shadow-black text-white rounded-lg"
                >
                  {!isLoading ? (
                    "Login"
                  ) : (
                    <span className="loading loading-spinner loading-sm"></span>
                  )}
                </button>
              </motion.div>
              {/* ---------------------- */}
            </form>

            {/* divider_start */}
            <div className=" mt-10 flex items-center">
              <div className=" w-1/2 border h-1 rounded-full bg-slate-400"></div>
              <h1 className=" text-nowrap mx-2">Login with</h1>
              <div className=" w-1/2 border h-1 rounded-full bg-slate-400"></div>
            </div>
            {/* divider_end*/}

            {/* -------------------------------- */}
            <motion.div
              className=" mt-5  flex gap-5 items-center justify-between"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.7, duration: 2.7 }}
            >
              <button
                onClick={GoogleLogin}
                className=" w-1/2 flex items-center justify-center h-12 rounded-md hover:scale-x-105 active:scale-x-90 bg-slate-200 shadow-md"
              >
                <FcGoogle size={25} />
              </button>
              <button className=" w-1/2 flex items-center justify-center h-12 rounded-md hover:scale-x-105 active:scale-x-90 bg-slate-200 shadow-md ">
                <SiGithub size={25} className=" " />
              </button>
            </motion.div>
            {/* ----------------------- */}
            <div className=" flex items-center justify-between mt-10">
              <button
                onClick={() => setOnPolicy(!onPolicy)}
                className=" hover:underline hover:underline-offset-4 active:text-yellow-400"
              >
                Policy
              </button>

              <Link
                href={"/user/forGotPassword"}
                className="hover:underline hover:underline-offset-4 active:text-yellow-400 "
              >
                Forgot Password
              </Link>
            </div>
          </motion.div>
          {/* ---------------------- */}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
