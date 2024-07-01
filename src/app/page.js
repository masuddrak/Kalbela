"use client"
import Card6Container from "@/components/Navber/home-page/Card6Container";
import HomeCenter from "@/components/Navber/home-page/HomeCenter";
import HomeLeft from "@/components/Navber/home-page/HomeLeft";
import HomePageSlider from "@/components/Navber/home-page/HomePageSlider";
import HomeRight from "@/components/Navber/home-page/HomeRight";
import photoimg from "../../public/assets/icon/video-stories.webp"
import Image from 'next/image'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import KalbelaJorip from "@/components/Navber/home-page/kalbelaJorip/KalbelaJorip";

export default function Home() {
  return (
    <main >
      <div className="grid grid-cols-7 gap-3">
        <div className="col-span-3">
          <HomeLeft></HomeLeft>
          <Card6Container></Card6Container>
        </div>
        <div className="col-span-2">
          <HomeCenter></HomeCenter>
        </div>
        <div className="col-span-2">
          <HomeRight />
        </div>
      </div>
      {/* home video section */}
      <div className="border border-1  p-2 my-10">
        <div className="flex justify-between mb-4">
          <div className='flex gap-1 items-center'>
            <Image
              src={photoimg}
              alt="Picture of the author"
              className=' w-[18px] h-[18px]'
            />
            <p className='font-bold'>ভিডিও</p>
          </div>
          <div className='flex gap-1 items-center'>
            <p className='font-bold'>ভিডিও</p>
            <IoArrowForwardCircleOutline className="text-3xl" />
          </div>
        </div>
        <HomePageSlider></HomePageSlider>
      </div>
      {/* kalbela jorip section */}
      <div className="my-10">
        <KalbelaJorip></KalbelaJorip>
      </div>
    </main>
  );
}
