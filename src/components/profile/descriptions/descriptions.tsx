"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
interface FormDataType {
  userId: string;
  descriptions: string;
}
const Descriptions = () => {
  const [description, setDescription] = useState({ descriptions: "" });
  const [editFlag, setEditFlag] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const onDesCriptions: SubmitHandler<FormDataType> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onLoggedUser = async () => {
    try {
      const request = await axios.get("/pages/api/token");
      const loggedUserData = request?.data?.findUser;
      setDescription({
        ...description,
        descriptions: loggedUserData?.descriptions,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const dispatch = useDispatch();
  const reqApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = reqApi?.loggedUser;

  useEffect(() => {
    onLoggedUser();
    dispatch(AllApiHandler());
  }, []);

  return (
    <div className="px-5 pb-10">
      {loggedUser?.descriptions == "" ? (
        <div className=" mt-5">
          <h1 className=" text-xl max-sm:text-base font-semibold">
            Write your descriptions:
          </h1>

          <form
            onSubmit={handleSubmit((data: FormDataType) =>
              onDesCriptions(data)
            )}
            className=" w-full"
          >
            <div>
              <textarea
                {...register("descriptions", { required: "Need to fill" })}
                value={description?.descriptions}
                onChange={(e) =>
                  setDescription({
                    ...description,
                    descriptions: e.target.value,
                  })
                }
                name="descriptions"
                className=" border bg-white w-1/2 h-32 rounded-md shadow  max-sm:w-full outline-none pl-2 pt-2"
                placeholder="write descriptions"
              ></textarea>
              {errors.descriptions && (
                <h1 className=" text-xs opacity-60 pb-2 pl-2">
                  {errors.descriptions.message}
                </h1>
              )}
            </div>
            <div className="">
              <button
                type="submit"
                className={` bg-gradient-to-tl to-red-400 via-red-600 from-red-400 h-12 rounded-md shadow-lg hover:scale-105 active:scale-95  w-1/2 max-sm:w-full text-white`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-5  container mx-auto p-5">
          <div className="">
            <div className=" flex items-center justify-between">
              <h1 className=" text-xl max-sm:text-base font-semibold">
                Descriptions:
              </h1>
              <FaRegEdit
                size={25}
                className={`${!editFlag ? "text-red-600" : "text-red-300"}`}
              />
            </div>
            <p className=" mt-2 max-sm:text-sm opacity-80">
              {description?.descriptions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descriptions;
