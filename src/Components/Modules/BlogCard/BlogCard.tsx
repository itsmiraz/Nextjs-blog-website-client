import Image from "next/image";
import React, { FC } from "react";
import blogImg from "../../../Assets/blog.png";
import blogImg2 from "../../../Assets/blogimg2.png";
interface Props {}

const LargeBlogCard: FC<Props> = () => {
  return (
    <div className="relative shadow-xl rounded-2xl bg-white  w-full">
      <div className="overflow-hidden rounded-none lg:h-[250px] 2xl:h-[350px]">
        <Image src={blogImg} alt="" className="w-full "></Image>
      </div>
      <div className="p-5">
        <h1 className="text-4xl font-bold">
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

const SmallVerticalBLogCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl">
      <div className="2xl:h-[180px] lg:h-[150px] overflow-hidden">
      <Image src={blogImg2} alt="" className="w-full"></Image>
  </div>
      <div className="px-3 py-2">
      <h1 className="text-2xl my-2 font-bold">
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

export { SmallVerticalBLogCard, LargeBlogCard };
