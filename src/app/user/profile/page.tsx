"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import Image from "next/image";
import EducationPage from "@/components/profile/Education/page";
import AddressPage from "@/components/profile/address/page";
import Descriptions from "@/components/profile/descriptions/descriptions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const reqApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = reqApi?.loggedUser;

  useEffect(() => {
    dispatch(AllApiHandler());
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
