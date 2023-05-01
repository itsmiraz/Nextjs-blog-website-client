import React from 'react';
import avater from '../../Assets/avater2.png'
import Image from 'next/image';
import { MdOutlinePostAdd ,} from "react-icons/md";


const Profile = () => {
    return (
        <div className='px-10 py-4 grid grid-cols-6     gap-10 '>
            <div className='col-span-2 p-4  bg-white rounded-lg'>
                <Image className='w-32' src={avater} alt="" />
                <h1 className='text-3xl my-2 font-semibold text-[#343434]'>Robert Jhon</h1>
        <p className='text-lg font-semibold text-[#232323]'><span className='text-[#111111]'>From,</span> Bangladesh</p>

                
                <div className='flex my-4 gap-x-2'>
                <div className='flex items-center font-semibold text-lg'>
                    <MdOutlinePostAdd className='text-3xl text-[#404040]' />
                    <p>
                        123 POSTS
                    </p>
                </div>
                <div className='flex items-center font-semibold text-lg'>
                    <MdOutlinePostAdd className='text-3xl text-[#404040]' />
                    <p>
                        123 POSTS
                    </p>
                </div>
                <div className='flex items-center font-semibold text-lg'>
                    <MdOutlinePostAdd className='text-3xl text-[#404040]' />
                    <p>
                        123 POSTS
                    </p>
                </div>
           </div>


            </div>
            <div className='col-span-4'>

            </div>
        </div>
    );
};

export default Profile;