import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import {
  CommentCard,
  LikedCard,
} from "@/Components/Modules/NotificationCards/NotificationCards";
import { MiniCard } from "@/Components/Modules/BlogCard/BlogCard";
import DashBoardLayout from "@/Layouts/DashBoardLayout/DashBoardLayout";

const AuthDashboard = () => {
  return (
    <DashBoardLayout>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="grid grid-cols-2 mb-6 gap-6">
            {/* Total Views */}
            <div className="w-full bg-white p-5 rounded-xl">
              <div className="flex my-4 justify-between items-center">
                <AiOutlineEye className="text-6xl text-[#EF3F48]" />
                <div className="text-green-500 font-semibold text-2xl items-center flex gap-x-2 ">
                  <BiUpArrowAlt className="text-3xl" />
                  <p> 14%</p>
                </div>
              </div>
              <h1 className="text-3xl text-[#3A3A3A] font-semibold">1000</h1>
              <h1 className="text-2xl text-[#3A3A3A] font-semibold">
                Total Views
              </h1>
            </div>
            {/* Total Followers */}
            <div className="w-full bg-white p-5 rounded-xl">
              <div className="flex my-4 justify-between items-center">
                <RxAvatar className="text-6xl text-violet-700" />
                <div className="text-red-500 font-semibold text-2xl items-center flex gap-x-2 ">
                  <BiUpArrowAlt className="text-3xl rotate-180" />
                  <p> 14%</p>
                </div>
              </div>
              <h1 className="text-3xl text-[#3A3A3A] font-semibold">1000</h1>
              <h1 className="text-2xl text-[#3A3A3A] font-semibold">
                Total Views
              </h1>
            </div>
          </div>
          {/* PosT Modal Trigger */}
          <div className="bg-white flex justify-between w-full px-6 py-4 rounded-xl">
            <h1 className="text-4xl font-bold text-[#4D4D4D]">
              What’s in your Mind?
            </h1>
            <button className="rounded-lg font-bold text-3xl px-3 py-1 text-white bg-[#EF3F48]">
              POST
            </button>
          </div>
        </div>
        <div className="col-span-1 rounded-xl py-5 px-3 w-full bg-white">
          {/* Notifications */}
          <div className="flex gap-x-3 items-center text-2xl font-semibold text-zinc-800">
            <IoIosNotifications className="text-3xl" />
            <h1>Notifications</h1>
          </div>

          <CommentCard name="Robert" />
          <LikedCard name="Hasan" />
          <CommentCard name="Robert" />
          <p className="text-xs my-4 hover:underline cursor-pointer">
            View More
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className=" bg-white my-4 p-4 rounded-xl">
        <div className="grid grid-cols-2">
          <p className="text-2xl font-semibold text-zinc-700">Posts</p>
          <div className="flex justify-around  items-center gap-x-2">
            <p>Likes</p>
            <p>Comments</p>
            <p>Share</p>
            <div></div>
          </div>
        </div>

        <div>
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <p className="my-4">View More</p>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default AuthDashboard;
