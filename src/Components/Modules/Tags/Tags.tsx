import React from "react";
interface Props {
  title: string;
  background: string;
  size?:string
}

const Tags: React.FC<Props> = ({ title, background,size }) => {
  return (
    <div>
      <p
        className={`${background} ${size} px-4 inline-block font-semibold py-1 rounded-full text-white `}
      >
        {title}
      </p>
    </div>
  );
};

export default Tags;
