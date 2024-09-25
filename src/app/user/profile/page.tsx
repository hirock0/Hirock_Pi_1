"use client";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import Image from "next/image";
import EducationPage from "@/components/profile/Education/page";
import AddressPage from "@/components/profile/address/page";

const ProfilePage = () => {
  const [description, setDescription] = useState(false);

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
          <div className=" container mx-auto p-5 mt-5 max-sm:mt-0  rounded-md bg-zinc-200 shadow">
            <div className=" flex max-sm:flex-col border-b border-b-slate-400 pb-5  ">
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
            {!description ? (
              <div className=" mt-5">
                <h1>Write your descriptions</h1>
                <form action="" className=" w-full">
                  <textarea
                    name="descriptions"
                    className=" border bg-white w-1/2 h-32 rounded-md shadow  max-sm:w-full outline-none pl-2 pt-2"
                    placeholder="write descriptions"
                  ></textarea>
                  <div className="">
                    <button
                      className={`  bg-gradient-to-tl to-red-400 via-red-600 from-red-400 h-12 rounded-md shadow-lg hover:scale-105 active:scale-95  w-1/2 max-sm:w-full text-white`}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="mt-5 container mx-auto p-5">
                <h1 className=" text-xl max-sm:text-base font-semibold">
                  Descriptions:
                </h1>
                <p className=" mt-2 max-sm:text-sm opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  maxime earum totam laboriosam voluptas voluptate quos
                  voluptatum? Delectus voluptas exercitationem, amet vitae
                  cumque, modi sunt, consequatur facere ullam ab dignissimos!
                </p>
              </div>
            )}

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
