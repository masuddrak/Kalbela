import React from 'react';

const TabCard = ({countNumber,title}) => {
    return (
        <div className='flex items-center gap-2  border-b-[2px] py-2'>
            <h2>{countNumber}</h2>
            <p className='font-semibold text-sm'>{title}</p>
        </div>
    );
};

export default TabCard;