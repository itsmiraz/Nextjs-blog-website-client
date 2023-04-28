import { SmallHorizontalBLogCard } from "@/Components/Modules/BlogCard/BlogCard";
import Cooltitle from "@/Components/Modules/CoolTitle/Cooltitle";
import { BsArrowRight } from "react-icons/bs";
import Social from "../Social/Social";


const Footer = () => {
  return (
    <div className="bg-[#010F22] px-10 py-4">
      <div className="grid grid-cols-8 gap-x-6">
        <div className="col-span-2">
          <Cooltitle
            background="W"
            titleColor="text-gray-200"
            bgColor="text-gray-800"
            title="WORLD"
          />
          <div className="space-y-10">
            <SmallHorizontalBLogCard title="text-gray-200" />
            <SmallHorizontalBLogCard title="text-gray-200" />
            <SmallHorizontalBLogCard title="text-gray-200" />
          </div>
        </div>
        <div className="col-span-2">
          <Cooltitle
            background="M"
            titleColor="text-gray-200"
            bgColor="text-gray-800"
            title="MUST READ"
          />
          <div className="space-y-10">
            {" "}
            <SmallHorizontalBLogCard title="text-gray-200" />
            <SmallHorizontalBLogCard title="text-gray-200" />
            <SmallHorizontalBLogCard title="text-gray-200" />
          </div>
        </div>
        <div className="col-span-1">
          <Cooltitle
            background="H"
            titleColor="text-gray-200"
            bgColor="text-gray-800"
            title="HOT TOPICS"
          />
          <div className="flex text-gray-400 flex-col justify-between space-y-10">
            <h1 className="text-lg">Global Economy</h1>
            <h1 className="text-lg">Environment</h1>
            <h1 className="text-lg">Religion</h1>
            <h1 className="text-lg">Fashion</h1>
            <h1 className="text-lg">Scandals</h1>
          </div>
        </div>
        <div className="col-span-3 px-20">
        <Cooltitle
            background="N"
            titleColor="text-gray-200"
            bgColor="text-gray-800"
            title="NEWS LETTER"
          />
          <h1 className="text-2xl text-gray-200 font-semibold">
            Heaven fruitful doesnt over les ideas appear creeping
          </h1>
          <div className="relative my-4">
          <BsArrowRight className="absolute cursor-pointer right-0 top-2 text-xl text-gray-400"/>
                      <input
              type="email"
              className="bg-transparent text-white focus:outline-none p-2 w-full border-b-2 border-gray-500"
              placeholder="Email Address"
            />
          </div>
          <Social title="text-white"/>
        </div>
          </div>
      <div className="h-[1px] w-full bg-slate-800 my-10"></div>
      <div className="text-[#868686] text-sm flex justify-between items-center">
        <p>© 2022, UltraNews | All rights reserved </p>
        <div className="flex items-center gap-x-3">
          <p>Terms </p>
          <p>Privacy Policy    </p>
          <p>Contact </p>
       </div>
      </div>
    </div>
  );
};

export default Footer;
