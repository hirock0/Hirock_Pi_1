"use client";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
const ModalPage = ({ showModal, setShowModal, InnerHtmlData }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const NextAuthSession = useSession();
  const logOut = async () => {
    setIsLoading(true);
    try {
      if (NextAuthSession?.status == "authenticated") {
        setTimeout(() => {
          signOut({ redirect: true, callbackUrl: "/ " });
          toast.success("auth Logout successful!");
          setIsLoading(false);
        }, 1000);
      } else {
        const logout = await axios.get("/pages/api/user/logout");
        if (logout?.data.success) {
          setTimeout(() => {
            toast.success("Logout successful!");
            router.push("/");
            router.refresh();
            setIsLoading(false);
          }, 1000);
        } else {
          toast.success("Logout not successful!");
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
  const windowEvent = () => {
    window.addEventListener("click", () => {
      setShowModal(false);
    });
  };
  const BtnStyle = {
    className:
      " flex items-center justify-center bg-red-600 px-5 max-sm:px-2 py-3 max-sm:py-2 max-sm:text-sm rounded-md  hover:bg-red-700 active:bg-red-800 text-white  ",
  };
  const Loading = {
    loading: `<div className="${BtnStyle.className}">loading...</div>`,
  };
  useEffect(() => {
    windowEvent();
  }, []);
  return (
    <main
      className={`${
        showModal
          ? " fixed top-0 z-50 left-0 w-full h-screen flex justify-center items-center bg-slate-800/80 "
          : " hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" border w-52 h-52 bg-white flex items-center justify-center flex-col rounded-md p-5 text-black"
      >
        {/* --------------------------------- */}
        <div className=" h-5/6 w-full">
          {/* ----------------------------- */}
          {/* ---------------------------------- */}
          {InnerHtmlData.logout && (
            <div
              onClick={logOut}
              className={`${BtnStyle.className}`}
              dangerouslySetInnerHTML={{
                __html: !isLoading ? InnerHtmlData.logout : Loading.loading,
              }}
            />
          )}
          {/* ----------------------------------- */}
        </div>
        {/* ------------------------------------------ */}

        <button
          onClick={() => setShowModal(false)}
          className=" w-full text-sm bg-red-600 text-white  py-1 rounded-md shadow shadow-black hover:bg-red-700 active:bg-red-800 "
        >
          Cancel
        </button>
      </div>
    </main>
  );
};

export default ModalPage;
