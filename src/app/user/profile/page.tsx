"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormDataType {
  userId: string;
  villageOrTown: string;
  postOffice: string;
  thana: string;
  district: string;
  postCode: string;
  country: string;
}
const ProfilePage = () => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();
  const [editFlag, setEditFlag] = useState(false);
  const [editValue, setEditValue] = useState({
    userId: "",
    villageOrTown: "",
    postOffice: "",
    thana: "",
    district: "",
    postCode: "",
    country: "",
  });

  const reqApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = reqApi?.loggedUser;
  const onEditAbleData: SubmitHandler<FormDataType> = async (data) => {
    try {
      data.userId = editValue.userId;
      const request = await axios.post("/pages/api/user/profileUpdate", data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

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
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    onLoggedUser();
    dispatch(AllApiHandler());
  }, []);
  return (
    <main className=" bg-slate-100 text-black">
      <div className=" pt-20 container mx-auto px-5">
        {/* --------------------- */}
        <div className=" flex flex-col items-center justify-center">
          {/* profile_image_start */}
          <div className=" h-32 w-32 rounded-full overflow-hidden">
            <Image
              src={loggedUser?.userImage}
              alt="user"
              width={500}
              height={500}
            />
          </div>
          {/* profile_image_end */}

          <h1 className=" mt-5">{loggedUser?.userName}</h1>
          <h1 className="">{loggedUser?.email}</h1>
        </div>
        {/* ---------------------------- */}

        <div className=" mt-10 pb-20 flex flex-col items-center">
          <div className=" w-full flex justify-end">
            <button onClick={() => setEditFlag(!editFlag)}>
              <FaRegEdit size={25} />
            </button>
          </div>
          <form
            onSubmit={handleSubmit((data: FormDataType) =>
              onEditAbleData(data)
            )}
            className=" w-full"
          >
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
                  className=" mt-2 bg-transparent border bg-white shadow-md shadow-slate-300 h-14 rounded-md focus:h-16 outline-none text-black pl-2 w-full"
                />
                {errors.country && errors.country.message}
              </div>
            </div>
            <div className=" w-full flex items-center justify-center mt-5  ">
              <button
                disabled={!editFlag ? true : false}
                className=" btn btn-primary w-1/2 max-sm:w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* ------------------- */}
      </div>
    </main>
  );
};

export default ProfilePage;
