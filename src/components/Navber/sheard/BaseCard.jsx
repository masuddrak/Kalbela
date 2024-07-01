import React from 'react';
import Image from 'next/image'
const BaseCard = ({image,title,miniCardClass,miniCardImgCalss}) => {
    return (
        <div  className={miniCardClass}>
            <Image
                    src={image}
                    alt="Picture of the author"
                    className={`rounded ${miniCardImgCalss}`}
                />
            <h4 className='font-semibold'>{title}</h4>
        </div>
    );
};

export default BaseCard;