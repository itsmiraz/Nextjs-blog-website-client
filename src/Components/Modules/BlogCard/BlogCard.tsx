import Image from "next/image";
import React, { FC } from "react";
import blogImg from "../../../Assets/blog.png";
import blogImg2 from "../../../Assets/blogimg2.png";
import blog from "../../../Assets/verticalblog.png";
import Tags from "../Tags/Tags";
import smallimage from '../../../Assets/smalimag.png'

interface SmallHorizontalBLogCardProps {
  title?:string
}

const LargeBlogCard = () => {
  return (
    <div className="relative shadow-xl rounded-2xl bg-white  w-full">
      <div className="overflow-hidden rounded-none lg:h-[250px] 2xl:h-[350px]">
        <Image src={blogImg} alt="" className="w-full "></Image>
      </div>
      <div className="p-5">
        <h1 className="lg:text-2xl 2xl:text-4xl font-bold">
          We got a right to pick a little fight, Bonanza
        </h1>
        <div className="flex my-4 font-semibold text-[#AFAFAF] items-center gap-x-10">
          <p>25 April</p>
          <p>10 min read</p>
          <p>11k views</p>
        </div>
        <p className="text-sm text-zinc-700 ">
          These people envy me for having a lifestyle they don’t have, but the
          truth is, sometimes I envy thei lifestyle instead.These people envy me
          for having a lifestyle they don’t have, but the truth is, sometimes I
          envy thei lifestyle instead.
        </p>
        <button className="text-xl my-2 font-semibold">View Details</button>
      </div>
    </div>
  );
};

const LargeHorizontalBlogCard = () => {
  return (
    <div className="flex rounded-2xl bg-white my-6 gap-x-4 items-center">
     
      <Image src={blog} className="w-2/3" alt=""></Image>
   
      <div className="p-2">
        <Tags title="LIFESTYLE" background="bg-blue-500"></Tags>
        <h1 className="lg:text-xl 2xl:text-4xl my-4 font-bold">
          FASHION The World Caters to Average People and Mediocre{" "}
        </h1>
        <div className="flex  font-semibold text-[#AFAFAF] items-center gap-x-10">
          <p>25 April</p>
          <p>10 min read</p>
          <p>11k views</p>
        </div>
        <p className="text-[#717171]">
          These people envy me for having a lifestyle they don’t have, but the
          truth is, sometimes I envy their lifestyle instead. Struggling to sell
          one multi-million dollar home currently.
        </p>
        <p className="underline cursor-pointer my-2 font-semibold ">READ MORE</p>
      </div>
    </div>
  );
};

const SmallVerticalBLogCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="2xl:h-[180px] lg:h-[150px] overflow-hidden">
        <Image src={blogImg2} alt="" className="w-full"></Image>
      </div>
      <div className="px-3 py-2">
        <h1 className="lg:text-xl 2xl:text-2xl my-2 font-bold">
          The litigants on the screen are not actors
        </h1>
        <div className="flex my-2 font-semibold text-[#AFAFAF] items-center gap-x-4">
          <p>25 April</p>
          <p>-</p>
          <p>11k views</p>
        </div>
      </div>
    </div>
  );
};



const SmallHorizontalBLogCard:FC<SmallHorizontalBLogCardProps> = ({title}) => {
  return (
    <div className="flex my-6 gap-x-4">
      <div className="w-[200px] overflow-hidden">
      <Image src={smallimage} className="w-full h-full" alt=''></Image>
    </div>
      <div>
        <Tags title="TECH" size="text-xs" background="bg-slate-700"></Tags>
        <h1 className={`lg:text-lg 2xl:text-2xl font-semibold ${title ? title :'text-black'}`}>Traveling Tends to Magnify
          All Human..</h1>
          <div className="flex font-semibold text-[#AFAFAF] items-center gap-x-4">
          <p>25 April</p>
          <p>-</p>
          <p>11k views</p>
        </div>
      </div>
    </div>
  );
};



export { SmallVerticalBLogCard,SmallHorizontalBLogCard, LargeHorizontalBlogCard, LargeBlogCard };
