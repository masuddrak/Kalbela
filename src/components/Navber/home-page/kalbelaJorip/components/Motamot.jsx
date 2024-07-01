import React from 'react';
import MotamotCard from './MotamotCard';
import image1 from "../../../../../../public/assets/jorip/harsh-vardhan-shringla.webp"
import motamot from "../../../../../../public/assets/jorip/opinion-v2.webp"
import image2 from "../../../../../../public/assets/jorip/dr-md-abdur-rahim.jpg"
import image3 from "../../../../../../public/assets/jorip/image-100327.webp"
import Image from 'next/image'
const Motamot = () => {
    return (
        <div className='border border-1 p-3 space-y-4'>
            <div className='flex gap-1 items-end'>
                <Image
                    src={motamot}
                    alt="Picture of the author"
                    className=''
                />
                <p className='text-xl font-semibold'>মতামত</p>
            </div>
            <MotamotCard
                img={image1}
                name="হর্ষ বর্ধন শ্রিংলা" sortDescription="ভারতের সাবেক পররাষ্ট্র সচিব এবং বাংলাদেশে ভারতের সাবেক হাইকমিশনার"
                logDescription="অর্থনৈতিক, রাজনৈতিক ও সামাজিকভাবে দ্রুত বর্ধনশীল বাংলাদেশকে ঘনিষ্ঠ ও মূল্যবান প্রতিবেশী হিসেবে বিবেচনা করে..."
                title={"কাঙ্ক্ষিত সময়ে সফল এক সফর"}
            ></MotamotCard>
            <MotamotCard
                img={image2}
                name="হর্ষ বর্ধন শ্রিংলা" sortDescription="ভারতের সাবেক পররাষ্ট্র সচিব এবং বাংলাদেশে ভারতের সাবেক হাইকমিশনার"
                logDescription="অর্থনৈতিক, রাজনৈতিক ও সামাজিকভাবে দ্রুত বর্ধনশীল বাংলাদেশকে ঘনিষ্ঠ ও মূল্যবান প্রতিবেশী হিসেবে বিবেচনা করে..."
                title={"দুর্নীতি করলে রক্ষা নেই"}
            ></MotamotCard>
            <MotamotCard
                img={image3}
                name="হর্ষ বর্ধন শ্রিংলা" sortDescription="ভারতের সাবেক পররাষ্ট্র সচিব এবং বাংলাদেশে ভারতের সাবেক হাইকমিশনার"
                logDescription="অর্থনৈতিক, রাজনৈতিক ও সামাজিকভাবে দ্রুত বর্ধনশীল বাংলাদেশকে ঘনিষ্ঠ ও মূল্যবান প্রতিবেশী হিসেবে বিবেচনা করে..."
                title={"কী প্রয়োজন ছিল প্রত্যয়ের"}
            ></MotamotCard>
        </div>
    );
};

export default Motamot;