import React from 'react';
import { MdOutlineWatchLater } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

import image3 from "../../../../../../public/assets/jorip/Poll-v2.webp"
import player from "../../../../../../public/assets/jorip/photo-106.jpg"
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

const OnlineJorip = () => {
    return (
        <div className='border border-1 p-3  space-y-2'>
            <div className='flex gap-1 items-end'>
                <Image
                    src={image3}
                    alt="Picture of the author"
                    className=''
                />
                <p className='text-xl font-semibold'>অনলাইন জরিপ</p>
            </div>
            <hr className='bg-red-600 h-[2px] mb-3' />
            <div className='border rounded-md border-1 p-3'>
                <div className='flex justify-between'>
                    <div className='flex gap-1 items-center'>
                        <MdOutlineWatchLater ></MdOutlineWatchLater>
                        <p className='text-sm'>৩০ জুন ২০২৪, ০২:৩৬ পিএম</p>
                    </div>
                    <FaDownload></FaDownload>
                </div>
                <div className='space-y-4'>
                    <Image
                        src={player}
                        alt="Picture of the author"
                        className='rounded-md mt-2'
                    />
                    <h3 className='font-semibold'>ভারত ও দক্ষিণ আফ্রিকার ম্যাচে ডেভিড মিলারের আউট নিয়ে অনেকে আপত্তি তুলছেন। আপনি কী মনে করেন?</h3>
                    <div className='space-y-4'>
                        <div className='flex gap-2'>
                            <input type="radio" id="r1" className='text-xl' name="rate" value="Fixed Rate" />
                            <input type="text" className='border border-1 border-gray-500 rounded-md text-xs p-1 w-full' placeholder='আউট সঠিক ছিল ' />
                        </div>
                        <div className='flex gap-2'>
                            <input type="radio" id="r1" className='text-xl' name="rate" value="Fixed Rate" />
                            <input type="text" className='border border-1 border-gray-500 rounded-md text-xs p-1 w-full' placeholder='সঠিক ছিল না' />
                        </div>
                        <p className='text-sm text-center'>মোট ভোটদাতাঃ ১,৮০৪ জন</p>
                        <div className='flex justify-center items-center gap-2 text-3xl text-green-700'>
                            <FaFacebook></FaFacebook>
                            <FaFacebookMessenger></FaFacebookMessenger>
                            <IoLogoWhatsapp></IoLogoWhatsapp>
                            <FaTwitter></FaTwitter>
                            <FaLinkedin></FaLinkedin>
                            <FaCopy></FaCopy>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineJorip;