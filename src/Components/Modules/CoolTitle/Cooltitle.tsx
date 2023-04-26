import React, { FC } from "react";

interface Props {
  background: string;
  title: string;
  titleColor?: string;
  bgColor?: string;
}

const Cooltitle: FC<Props> = ({ title, background, titleColor, bgColor }) => {
  return (
    <div className="my-6 relative">
      <h1
        className={`lg:text-6xl 2xl:text-8xl font-bold ${
          bgColor ? bgColor : "text-gray-300"
        } z-30`}
      >
        {background}
      </h1>
      <p
        className={`lg:text-3xl w-full whitespace-nowrap  lg:translate-y-4 2xl:translate-y-8 absolute top-0 left-0 2xl:text-4xl px-4 z-50  font-bold ${
          titleColor ? titleColor : "text-zinc-800"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default Cooltitle;
