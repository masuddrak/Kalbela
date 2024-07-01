import React from 'react';
import bnp from "../../../../public/assets/homeCenterImage/6.webp"
import Image from 'next/image'
import BaseCard from '../sheard/BaseCard';
const HomeCenter = () => {
    return (
        <div className='border border-1 p-2'>
            <div>
                <Image
                    src={bnp}
                    alt="Picture of the author"
                    className='w-full '
                />
                <p className='text-lg font-semibold'>রেলে ‘ভূতুড়ে’ উন্নয়ন সমস্যায় নজর নেই
                </p>
            </div>
            <hr className='my-5' />
            <div className='space-y-3'>
                    <BaseCard image={bnp} miniCardClass={"flex gap-2 border border-y-1 border-x-0 p-2"} miniCardImgCalss={"w-1/2"} title="মার্তিনেজের জোড়া গোলে"></BaseCard>
                    <BaseCard image={bnp} miniCardClass={"flex gap-2 border border-y-1 border-x-0 p-2"} miniCardImgCalss={"w-1/2"} title="মার্তিনেজের জোড়া গোলে"></BaseCard>
            </div>
        </div>
    );
};

export default HomeCenter;