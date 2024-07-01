import React from 'react';
import BaseCard from '../sheard/BaseCard';
import image1 from "../../../../public/assets/image6card/1.webp"
import image2 from "../../../../public/assets/image6card/2.webp"
import image3 from "../../../../public/assets/image6card/3.webp"
import image4 from "../../../../public/assets/image6card/4.webp"
import image5 from "../../../../public/assets/image6card/5.webp"
const Card6Container = () => {
    return (
        <div className=' border border-1 p-3 mt-2'>
            <div className='grid grid-cols-3 gap-3'>
                <BaseCard image={image1} title="মার্তিনেজের জোড়া গোলে
"></BaseCard>

                <div className='  border-x-[1px] border-gray-300 px-2' >
                    <BaseCard image={image3} title="মার্তিনেজের জোড়া গোলে 
"></BaseCard>
                </div>
                <BaseCard image={image2} title="মার্তিনেজের জোড়া গোলে 
"></BaseCard>
            </div>
            <hr  className='my-5'/>
            <div className='grid grid-cols-3 gap-3'>
                <BaseCard image={image4} title="মার্তিনেজের জোড়া গোলে 
"></BaseCard>
                <div className='  border-x-[1px] border-gray-300  px-2' >
                    <BaseCard image={image5} title="মার্তিনেজের জোড়া গোলে 
"></BaseCard>
                </div>
                <BaseCard image={image4} title="মার্তিনেজের জোড়া গোলে 
"></BaseCard>
            </div>
        </div>
    );
};

export default Card6Container;