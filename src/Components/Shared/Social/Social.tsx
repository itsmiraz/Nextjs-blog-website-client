import React,{FC} from 'react';
import { FaFacebookF,FaInstagram,FaYoutube ,FaTwitter} from "react-icons/fa";

interface Props{
    title?:string
}

const Social:FC<Props> = ({title}) => {
    return (
        <div>
            <h1 className={`text-4xl font-bold my-10 2xl:my-12 ${title? title:'text-black'}`}>Follow Us</h1>
            <div className="grid grid-cols-2 gap-4">
            <button className='flex justify-center  gap-x-2 items-center text-white bg-[#0F74B1] px-4 py-3 font-semibold rounded-lg text-xl'><FaFacebookF/>Facebook</button>
            <button className='flex justify-center  gap-x-2 items-center text-white bg-gradient-to-r from-[#BD06DD] to-[#EE0772] px-4 py-3 font-semibold rounded-lg text-xl'><FaInstagram/>Instagram</button>
            <button className='flex justify-center  gap-x-2 items-center text-white bg-[#E10000] px-4 py-3 font-semibold rounded-lg text-xl'><FaYoutube/>Youtube</button>
            <button className='flex  justify-center gap-x-2 items-center text-white bg-[#03A0E8] px-4 py-3 font-semibold rounded-lg text-xl'><FaTwitter/>Twitter</button>
         </div>
        </div>
    );
};

export default Social;