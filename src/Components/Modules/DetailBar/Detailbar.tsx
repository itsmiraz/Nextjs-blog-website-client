import React, { FC } from 'react';

interface Props{
    author: string,
    date: string,
    time: number,
    views:string
}

const Detailbar:FC<Props> = ({author,date,time,views}) => {
    return (
        <div className='flex font-semibold text-sm text-zinc-500 items-center gap-x-4'>
            <p>by {author}</p>
            <p>{date}</p>
            <p>{time} mins Read Time</p>
            <p>{views} Views</p>
        </div>
    );
};

export default Detailbar;