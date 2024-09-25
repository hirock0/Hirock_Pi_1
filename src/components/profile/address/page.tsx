"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";
interface FormDataType {
  userId: string;
  villageOrTown: string;
  postOffice: string;
  thana: string;
  district: string;
  postCode: string;
  country: string;
}
const AddressPage = () => {
  const [editValue, setEditValue] = useState({
    userId: "",
    villageOrTown: "",
    postOffice: "",
    thana: "",
    district: "",
    postCode: "",
    country: "",
    descriptions: "",
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();
  const [editFlag, setEditFlag] = useState<boolean>(false);

  const onLoggedUser = async () => {
    try {
      const request = await axios.get("/pages/api/token");
      const loggedUserData = request?.data?.findUser;
      const address = loggedUserData?.address;
      setEditValue({
        ...editValue,
        userId: loggedUserData?._id,
        villageOrTown: address?.villageOrTown,
        postOffice: address?.postOffice,
        thana: address?.thana,
        district: address?.district,
        postCode: address?.postCode,
        country: address?.country,
        descriptions: loggedUserData?.descriptions,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onEditAbleData: SubmitHandler<FormDataType> = async (data) => {
    try {
      data.userId = editValue.userId;
      const request = await axios.post("/pages/api/user/profileUpdate", data);
      if (request?.data?.success) {
        toast.success("Update successful!");
        setTimeout(() => {
          setEditFlag(false);
        }, 1000);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    onLoggedUser();
  }, []);

  return (
    <div className=" w-full">
      <form
        onSubmit={handleSubmit((data: FormDataType) => onEditAbleData(data))}
        className=" container mx-auto px-5  w-full bg-zinc-200 p-5 rounded-md shadow"
      >
        <div className=" w-full flex justify-between">
          <h1>Address:</h1>
          <div
            className=" cursor-pointer"
            onClick={() => setEditFlag(!editFlag)}
          >
            <FaRegEdit
              size={25}
              className={`${!editFlag ? "text-red-600" : "text-red-300"}`}
            />
          </div>
        </div>
        <div className=" w-full mt-5 grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className=" w-full">
            <h1>Village/Town</h1>
            <input
              readOnly={!editFlag ? true : false}
              {...register("villageOrTown", { required: "Need to fill" })}
              value={editValue?.villageOrTown}
              onChange={(e) =>
                setEditValue({
                  ...editValue,
                  villageOrTown: e.target.value,
                })
              }
              type="text"
              name="villageOrTown"
              placeholder="villageOrTown"
              className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
            />
            {errors.villageOrTown && errors.villageOrTown.message}
          </div>
          <div className="">
            <h1>Post Office</h1>
            <input
              readOnly={!editFlag ? true : false}
              {...register("postOffice", { required: "Need to fill" })}
              value={editValue?.postOffice}
              onChange={(e) =>
                setEditValue({ ...editValue, postOffice: e.target.value })
              }
              type="text"
              name="postOffice"
              placeholder="Post Office"
              className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
            />
            {errors.postOffice && errors.postOffice.message}
          </div>
          <div className="">
            <h1>Thana</h1>
            <input
              readOnly={!editFlag ? true : false}
              {...register("thana", { required: "Need to fill" })}
              value={editValue?.thana}
              onChange={(e) =>
                setEditValue({ ...editValue, thana: e.target.value })
              }
              type="text"
              name="thana"
              placeholder="Thana"
              className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
            />
            {errors.thana && errors.thana.message}
          </div>
          <div className="">
            <h1>District</h1>
            <input
              readOnly={!editFlag ? true : false}
              {...register("district", { required: "Need to fill" })}
              value={editValue?.district}
              onChange={(e) =>
                setEditValue({ ...editValue, district: e.target.value })
              }
              type="text"
              name="district"
              placeholder="District"
              className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
            />
            {errors.district && errors.district.message}
          </div>
          <div className="">
            <h1>Post Code</h1>
            <input
              readOnly={!editFlag ? true : false}
              {...register("postCode", { required: "Need to fill" })}
              value={editValue?.postCode}
              onChange={(e) =>
                setEditValue({ ...editValue, postCode: e.target.value })
              }
              type="text"
              name="postCode"
              placeholder="Post Code"
              className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
            />
            {errors.postCode && errors.postCode.message}
          </div>
          <div className="">
            <h1>Country</h1>
            <input
              readOnly={!editFlag ? true : false}
              {...register("country", { required: "Need to fill" })}
              value={editValue?.country}
              onChange={(e) =>
                setEditValue({ ...editValue, country: e.target.value })
              }
              type="text"
              name="country"
              placeholder="Country"
              className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
            />
            {errors.country && errors.country.message}
          </div>
        </div>
        <div className=" w-full flex items-center justify-center mt-5  ">
          <button
            type="submit"
            disabled={!editFlag ? true : false}
            className={`${
              !editFlag ? " opacity-50" : " opacity-100"
            }  bg-gradient-to-tl to-red-400 via-red-600 from-red-400 h-12 rounded-md shadow-lg hover:scale-105 active:scale-95  w-1/2 max-sm:w-full text-white`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressPage;
