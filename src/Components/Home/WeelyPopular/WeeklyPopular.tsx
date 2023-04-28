import {
  LargeBlogCard,
  SmallVerticalBLogCard,
} from "@/Components/Modules/BlogCard/BlogCard";
import Cooltitle from "@/Components/Modules/CoolTitle/Cooltitle";
import Social from "@/Components/Shared/Social/Social";
import React from "react";
import add from '../../../Assets/adimg.png'
import Image from "next/image";
const WeeklyPopular = () => {
  return (
    <div className="px-10 my-10 gap-x-10 grid grid-cols-7">
      <div className="col-span-2">
        <Cooltitle title="WEEKLY POPULAR" background="WEEKlY" />
        <div>
          <LargeBlogCard />
        </div>
      </div>
      <div className="col-span-3 my-4">
        <nav className="flex lg:mt-8 2xl:mt-12 mb-4 2xl:mb-8 gap-x-4 cursor-pointer  items-center">
          <p className="bg-white  rounded-full hover:bg-slate-700 text-black hover:text-white px-4 py-1">
            All
          </p>
          <p className="bg-white  rounded-full hover:bg-slate-700 text-black hover:text-white px-4 py-1">
            LIFESYTLE
          </p>
          <p className="bg-white  rounded-full hover:bg-slate-700 text-black hover:text-white px-4 py-1">
            FASHION
          </p>
          <p className="bg-white rounded-full hover:bg-slate-700 text-black hover:text-white px-4 py-1">
            TRAVEL
          </p>
          <p className="bg-white  rounded-full hover:bg-slate-700 text-black hover:text-white px-4 py-1">
            SPORTS
          </p>
        </nav>
        <div className=" grid grid-cols-2 gap-4 ">
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
          <SmallVerticalBLogCard />
        </div>
      </div>
      <div className="col-span-2 pt-10 2xl:pt-12" >
        <Social />
        <Image className="my-10" src={add} alt=""></Image>
      </div>
    </div>
  );
};

export default WeeklyPopular;
