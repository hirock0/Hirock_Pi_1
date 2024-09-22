"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import Image from "next/image";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const reqApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = reqApi?.loggedUser;
  useEffect(() => {
    dispatch(AllApiHandler());
  }, []);
  return (
    <main>
      <div className=" container mx-auto px-5">
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
      </div>
    </main>
  );
};

export default ProfilePage;
