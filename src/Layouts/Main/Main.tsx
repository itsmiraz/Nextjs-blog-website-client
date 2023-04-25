import Header from '@/Components/Shared/Header/Header';
import React, { FC } from 'react';


interface Props {
    children: React.ReactNode;
}
const Main:FC<Props> = ({children}) => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <Header />
            {
            children
            }
        </div>
    );
};

export default Main;