import React,{FC} from 'react';

interface Props{
    background: string,
    title:string
}

const Cooltitle: FC<Props> = ({title,background}) => {
    return (
        <div className='mb-4 relative'>
            <h1 className='lg:text-6xl 2xl:text-9xl font-bold text-gray-300 z-30'>{background}</h1>
            <p className='lg:text-3xl  lg:translate-y-4 2xl:translate-y-12 absolute top-0 left-0 2xl:text-5xl px-4 z-50  font-bold text-zinc-800'>{title}</p>
                        
        </div>
    );
};

export default Cooltitle;