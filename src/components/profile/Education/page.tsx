"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
interface FormDataType {
  userId: string;
  // -----------------------
  ssc_institution: string;
  ssc_result: string;
  ssc_passingYear: string;
  // --------------------------
  hsc_institution: string;
  hsc_result: string;
  hsc_passingYear: string;
  // --------------------------
  ba_institution: string;
  ba_result: string;
  ba_passingYear: string;
  // --------------------------
  ma_institution: string;
  ma_result: string;
  ma_passingYear: string;
  // -----------------------
}

const EducationPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const [editFlag2, setEditFlag2] = useState<boolean>(false);

  const [editValue, setEditValue] = useState({
    userId: "",
    // --------------------------
    ssc_institution: "",
    ssc_result: "",
    ssc_passingYear: "",
    // -------------------------
    hsc_institution: "",
    hsc_result: "",
    hsc_passingYear: "",
    // -------------------------
    ba_institution: "",
    ba_result: "",
    ba_passingYear: "",
    // ------------------------
    ma_institution: "",
    ma_result: "",
    ma_passingYear: "",
    // -----------------------
  });

  const onEducation = async (data: any) => {
    console.log(data);
    const response = await axios.post("/pages/api/user/profileUpdate", data);
  };

  const onLoggedUser = async () => {
    try {
      const request = await axios.get("/pages/api/token");
      const loggedUserData = request?.data?.findUser;
      const Educations = loggedUserData?.educations;
      setEditValue({
        ...editValue,
        userId: loggedUserData?._id,
        // --------------------------
        ssc_institution: Educations?.ssc?.institution,
        ssc_result: Educations?.ssc?.result,
        ssc_passingYear: Educations?.ssc?.passingYear,
        // -------------------------
        hsc_institution: Educations?.hsc?.institution,
        hsc_result: Educations?.hsc?.institution,
        hsc_passingYear: Educations?.hsc?.institution,
        // -------------------------
        ba_institution: Educations?.ba?.institution,
        ba_result: Educations?.ba?.institution,
        ba_passingYear: Educations?.ba?.institution,
        // ------------------------
        ma_institution: Educations?.ma?.institution,
        ma_result: Educations?.ma?.institution,
        ma_passingYear: Educations?.ma?.institution,
        // -----------------------
      });
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
        onSubmit={handleSubmit((data) => onEducation(data))}
        className="container mx-auto px-5 mt-5  w-full bg-zinc-200 p-5 rounded-md shadow"
      >
        <div className=" w-full flex justify-between">
          <h1>Education:</h1>
          <div
            className=" cursor-pointer"
            onClick={() => setEditFlag2(!editFlag2)}
          >
            <FaRegEdit
              size={25}
              className={`${!editFlag2 ? "text-red-600" : "text-red-300"}`}
            />
          </div>
        </div>

        <div className="">
          {/* -------------------------------- */}
          <div className=" shadow-md p-5 border-slate-400 rounded-md pb-5 mt-5 flex items-center justify-between gap-5 bg-white">
            <h1 className=" w-20 max-sm:w-10">S.S.C</h1>
            <div className=" grid grid-cols-3 max-sm:grid-cols-1 gap-3 w-full">
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ssc_institution", { required: "Need to fill" })}
                  value={editValue?.ssc_institution}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      ssc_institution: e.target.value,
                    })
                  }
                  type="text"
                  name="ssc_institution"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Institution"
                />
                {errors.ssc_institution && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ssc_institution.message}
                  </h1>
                )}
              </div>
              {/* ----- */}
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ssc_result", { required: "Need to fill" })}
                  value={editValue?.ssc_result}
                  onChange={(e) =>
                    setEditValue({ ...editValue, ssc_result: e.target.value })
                  }
                  type="text"
                  name="ssc_result"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Result"
                />
                {errors.ssc_result && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ssc_result.message}
                  </h1>
                )}
              </div>
              {/* --------- */}

              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ssc_passingYear", { required: "Need to fill" })}
                  value={editValue?.ssc_passingYear}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      ssc_passingYear: e.target.value,
                    })
                  }
                  type="text"
                  name="ssc_passingYear"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Passing Year"
                />
                {errors.ssc_passingYear && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ssc_passingYear.message}
                  </h1>
                )}
              </div>
              {/* ---- */}
            </div>
          </div>
          {/* --------------------------------- */}
          {/* -------------------------------- */}
          <div className=" shadow-md p-5 border-slate-400 rounded-md pb-5 mt-5 flex items-center justify-between gap-5 bg-white">
            <h1 className=" w-20 max-sm:w-10">H.S.C</h1>
            <div className=" grid grid-cols-3 max-sm:grid-cols-1 gap-3 w-full">
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("hsc_institution", { required: "Need to fill" })}
                  value={editValue?.hsc_institution}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      hsc_institution: e.target.value,
                    })
                  }
                  type="text"
                  name="hsc_institution"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Institution"
                />
                {errors.hsc_institution && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.hsc_institution.message}
                  </h1>
                )}
              </div>
              {/* ----- */}
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("hsc_result", { required: "Need to fill" })}
                  value={editValue?.hsc_result}
                  onChange={(e) =>
                    setEditValue({ ...editValue, hsc_result: e.target.value })
                  }
                  type="text"
                  name="hsc_result"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Result"
                />
                {errors.hsc_result && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.hsc_result.message}
                  </h1>
                )}
              </div>
              {/* --------- */}

              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("hsc_passingYear", { required: "Need to fill" })}
                  value={editValue?.hsc_passingYear}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      hsc_passingYear: e.target.value,
                    })
                  }
                  type="text"
                  name="hsc_passingYear"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Passing Year"
                />
                {errors.hsc_passingYear && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.hsc_passingYear.message}
                  </h1>
                )}
              </div>
              {/* ---- */}
            </div>
          </div>
          {/* --------------------------------- */}
          {/* -------------------------------- */}
          <div className=" shadow-md p-5 border-slate-400 rounded-md pb-5 mt-5 flex items-center justify-between gap-5 bg-white">
            <h1 className=" w-20 max-sm:w-10">B.A</h1>
            <div className=" grid grid-cols-3 max-sm:grid-cols-1 gap-3 w-full">
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ba_institution", { required: "Need to fill" })}
                  value={editValue?.ba_institution}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      ba_institution: e.target.value,
                    })
                  }
                  type="text"
                  name="ba_institution"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Institution"
                />
                {errors.ba_institution && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ba_institution.message}
                  </h1>
                )}
              </div>
              {/* ----- */}
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ba_result", { required: "Need to fill" })}
                  value={editValue?.ba_result}
                  onChange={(e) =>
                    setEditValue({ ...editValue, ba_result: e.target.value })
                  }
                  type="text"
                  name="ba_result"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Result"
                />
                {errors.ba_result && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ba_result.message}
                  </h1>
                )}
              </div>
              {/* --------- */}

              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ba_passingYear", { required: "Need to fill" })}
                  value={editValue?.ba_passingYear}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      ba_passingYear: e.target.value,
                    })
                  }
                  type="text"
                  name="ba_passingYear"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Passing Year"
                />
                {errors.ba_passingYear && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ba_passingYear.message}
                  </h1>
                )}
              </div>
              {/* ---- */}
            </div>
          </div>
          {/* --------------------------------- */}

          {/* -------------------------------- */}
          <div className=" shadow-md p-5 border-slate-400 rounded-md pb-5 mt-5 flex items-center justify-between gap-5 bg-white">
            <h1 className=" w-20 max-sm:w-10">B.A</h1>
            <div className=" grid grid-cols-3 max-sm:grid-cols-1 gap-3 w-full">
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ma_institution", { required: "Need to fill" })}
                  value={editValue?.ma_institution}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      ma_institution: e.target.value,
                    })
                  }
                  type="text"
                  name="ma_institution"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Institution"
                />
                {errors.ma_institution && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ma_institution.message}
                  </h1>
                )}
              </div>
              {/* ----- */}
              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ma_result", { required: "Need to fill" })}
                  value={editValue?.ma_result}
                  onChange={(e) =>
                    setEditValue({ ...editValue, ma_result: e.target.value })
                  }
                  type="text"
                  name="ma_result"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Result"
                />
                {errors.ma_result && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ma_result.message}
                  </h1>
                )}
              </div>
              {/* --------- */}

              <div className="">
                <input
                  readOnly={!editFlag2 ? true : false}
                  {...register("ma_passingYear", { required: "Need to fill" })}
                  value={editValue?.ma_passingYear}
                  onChange={(e) =>
                    setEditValue({
                      ...editValue,
                      ma_passingYear: e.target.value,
                    })
                  }
                  type="text"
                  name="ma_passingYear"
                  className="bg-white focus:h-14 shadow-md border h-12 rounded-md outline-none pl-2 w-full "
                  placeholder="Passing Year"
                />
                {errors.ma_passingYear && (
                  <h1 className=" text-xs opacity-60 pl-2">
                    {errors.ma_passingYear.message}
                  </h1>
                )}
              </div>
              {/* ---- */}
            </div>
          </div>
          {/* --------------------------------- */}
        </div>

        <div className=" w-full flex items-center justify-center mt-5  ">
          <button
            disabled={!editFlag2 ? true : false}
            className={`${
              !editFlag2 ? " opacity-50" : " opacity-100"
            }  bg-gradient-to-tl to-red-400 via-red-600 from-red-400 h-12 rounded-md shadow-lg hover:scale-105 active:scale-95  w-1/2 max-sm:w-full text-white`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationPage;
