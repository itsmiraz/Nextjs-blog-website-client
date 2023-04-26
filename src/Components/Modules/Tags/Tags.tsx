import React from "react";
interface Props {
  title: string;
  background: string;
}

const Tags: React.FC<Props> = ({ title, background }) => {
  return (
    <div>
      <p
        className={`${background} px-4 inline-block font-semibold py-1 rounded-full text-white `}
      >
        {title}
      </p>
    </div>
  );
};

export default Tags;
