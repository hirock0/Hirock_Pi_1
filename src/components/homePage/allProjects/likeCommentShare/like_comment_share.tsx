"use client";

import CommentBtn from "./commentBtn/commentBtn";
import LikeBtn from "./likeBtn/likeBtn";
import ShareBtn from "./shareBtn/shareBtn";
interface Props {
  item: object;
}
const Like_comment_share: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <div className=" flex w-full mt-5 justify-between">
        <LikeBtn item={item} />
        <CommentBtn item={item} />
      </div>
      <div className=" mt-5 max-sm:mt-2 w-full flex justify-start">
        <ShareBtn item={item}  />
      </div>
    </div>
  );
};

export default Like_comment_share;
