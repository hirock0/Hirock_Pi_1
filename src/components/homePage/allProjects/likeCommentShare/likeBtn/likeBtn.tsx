"use clients";
import { AllApiHandler } from "@/utils/redux/Slices/slice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSolidLike } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
interface Props {
  item: object | any;
}
const LikeBtn: React.FC<Props> = ({ item }) => {
  const router = useRouter();
  const [likeFlag, setLikeFlag] = useState(false);
  const [scaleUp, setScaleUp] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const dispatch = useDispatch();
  const reqApi = useSelector((state: any) => state?.Slice?.data);
  const loggedUser = reqApi?.loggedUser;

  const onLike = async () => {
    setTimeout(() => {
      setScaleUp(false);
    }, 1000);
    try {
      const userId = loggedUser?._id;
      const projectId = item?._id;
      if (userId == undefined) {
        toast.success("Login first");
        setTimeout(() => {
          router.push("/user/login");
        }, 1000);
      } else {
        const response = await axios.post("/pages/api/projects/likes", {
          userId,
          projectId,
        });
        if (response?.data?.message == "liked") {
          setLikeCount((prev) => prev + 1);
        } else {
          setLikeCount((prev) => prev - 1);
        }
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const AllLikes = () => {
    setLikeCount(item?.likes?.length);
  };

  useEffect(() => {
    dispatch(AllApiHandler());
    AllLikes();
  }, []);
  return (
    <div className=" flex flex-col items-center">
      <button
        onClick={() => {
          onLike(), setScaleUp(!scaleUp), setLikeFlag(!likeFlag);
        }}
      >
        <BiSolidLike
          size={!scaleUp ? 20 : 25}
          className={
            item?.likes.find((item: any) => item.userId == loggedUser?._id)
              ? `${!likeFlag ? "text-red-600" : "text-white"}`
              : `${!likeFlag ? "text-white" : "text-red-600"}`
          }
        />
      </button>
      <h1>{likeCount}</h1>
    </div>
  );
};

export default LikeBtn;
