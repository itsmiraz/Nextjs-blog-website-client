import React from 'react';


import { RxDashboard } from "react-icons/rx";



const AuthDashboard = () => {
    return (
        <div className='py-10 px-10 grid grid-cols-4'>
            <div className='col-span-1 bg-white rounded-2xl'>
                <button className='flex items-center gap-x-2 py-2 px-4'>
                  <RxDashboard/>  Dashboard
</button>
            </div>
            <div className='col-span-3'>

            </div>
            
        </div>
    );
};

export default AuthDashboard;