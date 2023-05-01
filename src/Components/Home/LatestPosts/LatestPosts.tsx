import {
  LargeHorizontalBlogCard,
  SmallHorizontalBLogCard,
} from "@/Components/Modules/BlogCard/BlogCard";
import Cooltitle from "@/Components/Modules/CoolTitle/Cooltitle";
import React from "react";
import { HiTrendingUp } from "react-icons/hi";
const LatestPosts = () => {
  return (
    <section className="px-4 md:px-10 my-10 relative">
      <div className="flex justify-between items-center">
        <div>
          <Cooltitle background="LATEST" title="RECENT POSTS"></Cooltitle>
        </div>

        <p className="text-xl  cursor-pointer font-semibold">View All</p>
      </div>
      <div className="grid grid-cols-6 gap-10 ">
        {/* RECENT Posts */}
        <div className="col-span-6 md:col-span-4">
          <LargeHorizontalBlogCard />
          <LargeHorizontalBlogCard />

          <LargeHorizontalBlogCard />
          <LargeHorizontalBlogCard />
        </div>
        {/* Trending Posts */}
        <div className="col-span-6 md:col-span-2 h-fit bg-white my-2 md:my-6 p-6 rounded-2xl">
          <h1 className="uppercase  my-2 text-4xl font-bold text-red-500 flex items-center gap-x-4">
            {" "}
            <HiTrendingUp /> Trending
          </h1>
          <div>
            <SmallHorizontalBLogCard />
            <SmallHorizontalBLogCard />
            <SmallHorizontalBLogCard />
            <SmallHorizontalBLogCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
