"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import Image from "next/image";
import EducationPage from "@/components/profile/Education/page";
import AddressPage from "@/components/profile/address/page";
import Descriptions from "@/components/profile/descriptions/descriptions";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
const ProfilePage = () => {
  const [ProfileData, setProfileData] = useState({
    _id: "",
    contact: "",
    userImage: "",
    userName: "",
    userEmail: "",
  });
  const [editFlag, setEditFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onLoggedUser = async () => {
    try {
      const request = await axios.get("/pages/api/token");
      const loggedUserData = request?.data?.findUser;
      console.log(loggedUserData);

      setProfileData({
        ...ProfileData,
        _id: loggedUserData?._id,
        contact: loggedUserData?.contact,
        userImage: loggedUserData?.userImage,
        userEmail: loggedUserData?.email,
        userName: loggedUserData?.userName,
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const onSendContact = async () => {
    setIsLoading(true);
    try {
      const data = {
        userId: ProfileData?._id,
        contact: ProfileData?.contact,
      };
      const request = await axios.post("/pages/api/user/profileUpdate", data);
      if (request?.data?.success) {
        toast.success("Update successful!");
        setTimeout(() => {
          setEditFlag(false);
          setIsLoading(false);
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
    <main className=" bg-white text-black">
      <div className=" ">
        {/* --------------------- */}
        <div className="   pb-5 flex flex-col items-center justify-center">
          <div className=" container mx-auto mt-5 max-sm:mt-0  rounded-md bg-zinc-200 shadow">
            <div className=" flex max-sm:flex-col border-b p-5 border-b-slate-400 pb-5  ">
              <div className="w-1/2 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
                {/* profile_image_start */}
                <div className=" h-32 w-32 max-sm:w-20 max-sm:h-20 rounded-full overflow-hidden">
                  <Image
                    src={ProfileData?.userImage}
                    alt="user"
                    width={500}
                    height={500}
                  />
                </div>
                {/* profile_image_end */}

                <h1 className=" mt-5">{ProfileData?.userName}</h1>
                <h1 className="">{ProfileData?.userEmail}</h1>

                <div className="">
                  <div className=" relative flex items-center w-fit  mt-2">
                    <input
                      readOnly={!editFlag ? true : false}
                      value={ProfileData?.contact}
                      onChange={(e) =>
                        setProfileData({
                          ...ProfileData,
                          contact: e.target.value,
                        })
                      }
                      type="text"
                      name="contact"
                      placeholder="Contact No."
                      className=" bg-white pl-2  h-10 rounded-md shadow-md outline-none focus:h-12"
                    />
                    <button
                      onClick={() => setEditFlag(!editFlag)}
                      className=" absolute right-0 top-0 h-full w-8 flex items-center justify-center "
                    >
                      <FaRegEdit
                        className={` ${
                          !editFlag ? " opacity-50" : " opacity-100"
                        } text-red-600 `}
                      />
                    </button>
                  </div>
                  <button
                    onClick={onSendContact}
                    className={`${
                      !editFlag ? "hidden" : "block"
                    } bg-red-600 text-white w-20 mt-2 h-7 rounded-md shadow-md shadow-black hover:bg-red-700 active:bg-red-800 flex items-center justify-center`}
                  >
                    {!isLoading ? (
                      "Edit"
                    ) : (
                      <div className=" loading loading-xs"></div>
                    )}
                  </button>
                </div>
              </div>

              <div className="w-1/2 max-sm:w-full max-sm:mt-5 max-sm:p-5 max-sm:flex max-sm:flex-col max-sm:items-center ">
                <ul className=" list-disc flex flex-col gap-2">
                  <li>Motivation will almost always beat mere talent.</li>
                  <li>
                    Let me tell you the secret that has led me to my goals: my
                    strength lies solely in my tenacity.
                  </li>
                  <li>Dreams are lovely.</li>
                  <li>
                    You may encounter many defeats, but you must not be
                    defeated.
                  </li>
                  <li>Obstacles can't stop you.</li>
                  <li>Always do your best.</li>
                </ul>
              </div>
            </div>
            {/* description_start */}
            <Descriptions />
            {/* description_end */}
          </div>
        </div>
        {/* ---------------------------- */}

        {/* ---------------------------- */}
        <div className="   pb-20 flex flex-col items-center">
          <AddressPage />
          {/* ---------------------------------------------------------------------------------------------------------- */}
          <EducationPage />
          {/* ------------------------------------------------------------------------ */}
        </div>
        {/* ------------------- */}
      </div>
    </main>
  );
};

export default ProfilePage;
