import React from 'react';
import Image from 'next/image'
const MotamotCard = ({ img, title, name, sortDescription, logDescription }) => {
    return (
        <div className='grid grid-cols-3 gap-3 bg-[#FFF9E1] p-4 border-b-[3px] border-b-red-600 rounded-b-md'>
            <div className='col-span-1'>
                <div className='w-16 h-16 rounded-full mx-auto border-[3px] border-red-600 '>
                    <Image
                        src={img}
                        alt="Picture of the author"
                        className='w-full h-full  rounded-full object-contain'
                    />
                </div>
                <div className='text-center'>
                    <p className='font-semibold text-sm'>{name}</p>
                    <p className='text-xs'>{sortDescription}</p>
                </div>
            </div>
            <div className='col-span-2 space-y-3'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='text-sm'>{logDescription}</p>
            </div>
        </div>
    );
};

export default MotamotCard;