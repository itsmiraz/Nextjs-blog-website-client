import React ,{FC} from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiLogOut, BiStats } from 'react-icons/bi';
import { RxDashboard } from 'react-icons/rx';
import { SlCalender } from 'react-icons/sl';

interface Props {
    children: React.ReactNode;
  }


const DashBoardLayout:FC<Props> = ({children}) => {
    return (
        <div className="py-10 px-10 gap-10 grid grid-cols-5">
    
        {/* SideBar */}
          <div className="col-span-1 h-fit font-semibold text-xl text-[#404040] p-5 bg-white rounded-xl">
            <button className="flex w-full hover:text-white rounded-md hover:bg-gradient-to-r from-[#EF3F48] to-[#EE0772] my-3 items-center gap-x-2 py-3 px-5">
              <RxDashboard /> Dashboard
            </button>
            <button className="flex w-full hover:text-white rounded-md hover:bg-gradient-to-r from-[#EF3F48] to-[#EE0772] my-3 items-center gap-x-2 py-3 px-5">
              <BiStats /> Statics
            </button>
            <button className="flex w-full hover:text-white rounded-md hover:bg-gradient-to-r from-[#EF3F48] to-[#EE0772] my-3 items-center gap-x-2 py-3 px-5">
              <SlCalender /> Calender
            </button>
            <hr />
            <button className="flex w-full hover:text-white rounded-md hover:bg-gradient-to-r from-[#EF3F48] to-[#EE0772] my-3 items-center gap-x-2 py-3 px-5">
              <AiOutlineSetting /> Settings
            </button>{" "}
            <button className="flex w-full hover:text-white rounded-md hover:bg-gradient-to-r from-[#EF3F48] to-[#EE0772] my-3 items-center gap-x-2 py-3 px-5">
              <BiLogOut /> Logout
            </button>
          </div>
          <div className="col-span-4">
                {
                    children
          }
          </div>
        </div>
    );
};

export default DashBoardLayout;