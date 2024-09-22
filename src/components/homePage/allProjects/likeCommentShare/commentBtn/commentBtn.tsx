"use client";
import { useEffect, useState } from "react";
import { MdOutlineInsertComment } from "react-icons/md";
import Style from "./commentBtn.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
interface Props {
  item: object | any;
}
interface FormDataType {
  comment: string;
  userId: string;
  userImage: string;
  projectId: string;
  recentDate: string;
  dateField: any;
}

const CommentBtn: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [commentLength, setCommentLength] = useState(0);
  const [commentFlag, setCommentFlag] = useState(false);
  const [allComments, setAllComments] = useState<any>([]);
  const dispatch = useDispatch();
  const reqApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = reqApi?.loggedUser;

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>();

  const commentHandler: SubmitHandler<FormDataType> = async (data) => {
    data.userImage = loggedUser?.userImage;
    data.recentDate = new Date().toLocaleDateString();
    data.userId = loggedUser?._id;
    data.projectId = item?._id;
    try {
      if (loggedUser == undefined) {
        toast.success("Please login first!");
        router.push("/user/login");
      } else {
        const response = await axios.post("/pages/api/projects/comments", data);
        if (response?.data?.success) {
          setAllComments((prev: any) => [...prev, data]);
          router.refresh();
          toast.success("Comment successful");
          setCommentLength((prev) => prev + 1);
          reset();
        } else {
          toast.success("something went wrong");
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const SetValueOnForm = () => {
    setCommentLength(item?.comments?.length);
    setAllComments(item?.comments);
  };

  useEffect(() => {
    dispatch(AllApiHandler());
    SetValueOnForm();
  }, []);

  return (
    <div className=" ">
      <div className=" flex flex-col items-center">
        <button onClick={() => setCommentFlag(!commentFlag)}>
          <MdOutlineInsertComment size={25} />
        </button>
        <h1>{commentLength}</h1>
      </div>

      {/* ============================== */}
      <div
        onClick={() => setCommentFlag(!commentFlag)}
        className={` ${
          !commentFlag ? "hidden" : "block"
        } z-30 fixed top-24 left-0 w-full h-full bg-slate-800/80 ${
          Style.commentPopup
        } overflow-y-scroll pb-32 `}
      >
        <div className="  flex justify-center mt-10 ">
          <div
            onClick={(e) => e.stopPropagation()}
            className=" w-1/2 max-md:w-4/6  rounded-sm bg-slate-200 text-black p-5"
          >
            <div className=" flex items-start">
              <button
                className=" btn btn-ghost"
                onClick={() => setCommentFlag(false)}
              >
                Cancel
              </button>
            </div>
            <div className="">
              <h1>{item?.projectTitle}</h1>
              <h1>({commentLength})</h1>
            </div>
            {/* form_start */}
            <form
              className=" mt-5"
              onSubmit={handleSubmit((data) => commentHandler(data))}
            >
              <h2>Write your comments</h2>
              <textarea
                {...register("comment", { required: "Need to fill!" })}
                className=" mt-3 w-full h-32 p-3 outline-none bg-white rounded-md text-black shadow shadow-slate-400"
                placeholder=" Comments"
                name="comment"
              ></textarea>
              {errors.comment && <h1>{errors.comment.message}</h1>}
              <div className=" flex">
                <button
                  type="submit"
                  className="  bg-red-600 w-1/2 h-10 rounded-md mt-3 max-md:w-full text-white"
                >
                  submit
                </button>
              </div>
            </form>
            {/* form_send */}
            <div
              className={`${Style.CommentBox} h-52 border mt-5 py-3 bg-white overflow-y-scroll`}
            >
              {/* ------------------------- */}

              <ul className=" flex flex-col gap-5 px-5">
                {allComments?.toReversed()?.map((elm: any, index: any) => (
                  <li key={index} className=" flex items-center gap-5">
                    <Image
                      src={elm?.userImage?.toString()}
                      alt="user"
                      width={30}
                      height={30}
                      className=" rounded-full"
                    />
                    <div className=" w-full">{elm?.comment}</div>
                    <div className=" text-xs text-slate-400">
                      {elm?.recentDate}
                    </div>
                  </li>
                ))}
              </ul>

              {/* --------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBtn;
