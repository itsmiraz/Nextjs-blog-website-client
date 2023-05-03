import Image from "next/image";
import React, { FC } from "react";
import avater from "../../../Assets/avater.png";
import { HiEllipsisVertical } from "react-icons/hi2";

interface Props {
  avater?: string;
  name: string;
}

const CommentCard: FC<Props> = ({ name }) => {
  return (
    <div className="p-2 bg-[#ECECEC]  rounded-md my-3 flex ites-center w-full  gap-2">
      <Image src={avater} className="w-8 rounded-full" alt="" />
      <div className="flex w-full items-center gap-2 justify-between">
        <p className="text-sm font-semibold">{name} Commeted in Your Blog</p>
        <HiEllipsisVertical />
      </div>
    </div>
  );
};




const LikedCard:FC<Props> = ({name}) => {
    return (
      <div className="p-2 bg-[#ECECEC]  rounded-md my-3 flex ites-center w-full  gap-2">
      <Image src={avater} className="w-8 rounded-full" alt="" />
      <div className="flex w-full items-center gap-2 justify-between">
        <p className="text-sm font-semibold">{name} Liked Your Blog</p>
        <HiEllipsisVertical />
      </div>
    </div>
    );
};

export { CommentCard,LikedCard};

