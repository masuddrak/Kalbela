import React from 'react';
import bnp from "../../../../public/assets/bnp.webp"
import Image from 'next/image'
const HomeLeft = () => {
    return (
        <div className='grid grid-cols-3 gap-2 border border-1 p-2'>
            <div className='col-span-2'>
                <Image
                    src={bnp}
                    alt="Picture of the author"
                />
            </div>
            <div className=''>
                <h2 className='text-xl text-justify'>নেতৃত্ব নিয়ে জটিলতায়</h2>
                <p className='text-sm text-justify'>সজহার আগে জাতীয়তাবাদী এনপিসহ একাধিক ইউনিটের কমিটি বিলুপ্ত করা হয়। ঈদের পরপরই সেখানে কমিটি গঠনের সম্ভাবনা থাকলেও ১৫ দিনেও নতুন কমিটি হয়নি।সমীকরণও।</p>
            </div>
        </div>
    );
};

export default HomeLeft;