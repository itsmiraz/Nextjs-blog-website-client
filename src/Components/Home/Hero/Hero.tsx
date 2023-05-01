import Tags from "@/Components/Modules/Tags/Tags";
import React, { FC, useState } from "react";
import image from "../../../Assets/Hero/heroimage.png";
import Image from "next/image";
import writer from "../../../Assets/Hero/wirter.png";

interface Props {}

export const Hero: FC<Props> = () => {
  const [loading, setloading] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-xl m-4 md:m-10">
        <div className="bg-white md:order-first order-last  p-4 md:p-8 rounded-b-2xl md:rounded-l-2xl ">
          <Tags title="Lifestyle" background="bg-blue-500" />
          <h1 className="lg:text-3xl 2xl:text-5xl my-4 font-bold">
            This Year Enjoy the Color of Festival with Amazing Holi Gift Ideas
          </h1>
          <div className="flex md:text-lg text-sm font-semibold text-[#AFAFAF] items-center gap-x-10">
            <p>25 April</p>
            <p>10 min read</p>
            <p>11k views</p>
          </div>
          <p className="my-4 text-xs lg:text-sm 2xl:text-xl text-zinc-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            delectus consequuntur impedit a odio reiciendis amet neque quod,
            fugiat nemo, cumque magnam quia consectetur nam. Quasi dolorem
            necessitatibus mollitia et corporis! Magnam neque aspernatur nemo
            maiores pariatur aperiam porro esse consectetur qui quam dicta
           <span className="md:block hidden"> officiis voluptates sint doloribus eius unde sit explicabo,
            asperiores ducimus praesentium quas illum inventore? Possimus autem
            quia debitis adipisci dolorum animi odit voluptatem labore vel
            dolores quibusdam...</span>
          </p>

          <div className="mt-8 flex gap-2 items-center">
            <Image className="w-14 2xl:w-20" src={writer} alt=""></Image>
            <div>
              <p className=" text-sm md:text-xl font-semibold">Donald Trump</p>
              <p className="text-xs lg:text-lg ">London,Germay,Uk</p>
            </div>
          </div>
        </div>
        <div className="md:order-last order-first relative  rounded-t-2xl md:rounded-l-2xl overflow-hidden">
          {loading && (
            <div className="bg-gray-500 mr-4 opacity-10 absolute top-0 left-0 animate-pulse w-full h-full"></div>
          )}

          <Image
            onLoadingComplete={() => setloading(false)}
            className="h-full w-full"
          
            src={
              image
            }
            alt=""
          ></Image>
        </div>
      </div>
    </>
  );
};
