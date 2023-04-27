import React, { FC } from "react";
import avater from "../../../Assets/avater.png";
import Image from "next/image";

interface Props {}

const CommentCard: FC<Props> = () => {
  return (
    <div className="flex my-6 items-center gap-4">
      <Image className="w-16" src={avater} alt="" />
      <div>
        <div className="flex justify-between items-center ">
          <p className="text-xl font-semibold ">Maria</p>
          <p className="text-sm">December 4, 2020 at 3:12 pm</p>
        </div>
        <p className="text-sm ">
          Vestibulum euismod, leo eget varius gravida, eros enim interdum urna,
          non rutrum enim ante quis metus. Duis porta ornare nulla ut bibendum
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
