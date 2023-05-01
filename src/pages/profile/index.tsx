import React from "react";
import avater from "../../Assets/avater2.png";
import Image from "next/image";
import { MdOutlinePostAdd } from "react-icons/md";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { LargeBlogCard } from "@/Components/Modules/BlogCard/BlogCard";

const Profile = () => {
  return (
    <div className="px-10 py-4 grid grid-cols-7     gap-10  relative">
      <div className="col-span-2 px-4 py-6 h-fit  bg-white rounded-2xl">
        <Image className="w-32" src={avater} alt="" />
        <h1 className="text-3xl my-2 font-semibold text-[#343434]">
          Robert Jhon
        </h1>
        <p className="text-lg font-semibold text-[#232323]">
          <span className="text-[#111111]">From,</span> Bangladesh
        </p>

        <div className="flex my-4  overflow-x-auto gap-x-4 font-semibold">
          <div className="flex whitespace-nowrap py-2 items-center font-semibold text-sm">
            <MdOutlinePostAdd className="text-3xl text-[#404040]" />
            <p>123 POSTS</p>
          </div>
          <div className="flex whitespace-nowrap py-2 items-center font-semibold text-sm">
            <AiOutlineHeart className="text-3xl text-[#404040]" />
            <p>2423 LIKES</p>
          </div>
          <div className="flex whitespace-nowrap py-2 items-center font-semibold text-sm">
            <AiOutlineComment className="text-3xl text-[#404040]" />
            <p>23 COMMENTS</p>
          </div>
        </div>
        <p className="text-lg font-semibold text-[#232323]">About</p>
        <p className="text-sm font-semibold text-[#232323]">
          You should write because you love the shape of stories and sentences
          and the creation of different words on a page. Graduating from a top
          accelerator or incubator can be as career-defining for a startup
          founder as an elite university diploma.
        </p>
        <p className="text-lg font-semibold text-[#232323]">
          Follow on Social Media
        </p>
        <div className="text-3xl text-[#414141] flex items-center gap-x-4 my-2">
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <AiOutlineLinkedin />
        </div>
      </div>
      <div className="col-span-5">
        <div className="flex items-center gap-x-4 my-4">
          <p className="">Sort by : </p>
          <select className="p-2 font-semibold text-zinc-700">
            <option>Most Recent</option>
            <option>Most Liked</option>
            <option>Most Viewed</option>
          </select>
        </div>
        <div className=" grid grid-cols-2 gap-10">
          <LargeBlogCard />
          <LargeBlogCard />
          <LargeBlogCard />
          <LargeBlogCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
