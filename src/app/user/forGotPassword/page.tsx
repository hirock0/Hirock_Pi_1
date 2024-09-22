"use client";
import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface FormDataType {
  email: string;
}
const ForGotPasswordPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onForgotPassword: SubmitHandler<FormDataType> = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);

      const response = await axios.post("/pages/api/user/forgotpassword", data);
      if (response?.data?.success) {
        toast.success("Account is found, check the email!");

        setTimeout(() => {
          setIsLoading(false);
          router.push("/");
        }, 1000);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <main className=" h-screen bg-slate-100 text-black">
      <div className=" container mx-auto flex items-center justify-center h-4/6">
        <div className=" h-4/6 border w-4/6 lg:w-1/2 max-sm:w-5/6 bg-white rounded-md shadow-md p-5 flex flex-col justify-center">
          <h1 className=" text-center">Please Enter your email.</h1>

          <form
            onSubmit={handleSubmit((data) => onForgotPassword(data))}
            className=" mt-5"
          >
            <input
              {...register("email", { required: "Need to fill!" })}
              type="email"
              name="email"
              placeholder=" Email"
              className=" h-12 w-full pl-2 rounded-md bg-transparent border shadow-lg outline-none focus:h-14 "
            />
            {errors.email && errors.email?.message}
            <div className=" mt-10 flex items-center justify-center">
              <button
                type="submit"
                className=" flex items-center justify-center w-1/2 max-md:w-full h-12 bg-red-600 text-white rounded-lg hover:scale-x-105 active:scale-x-95"
              >
                {!isLoading ? "Find Account" : <div className=" loading"></div>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForGotPasswordPage;
