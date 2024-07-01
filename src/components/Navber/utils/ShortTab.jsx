'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import VideoStory from '../slider/VideoStory';
import videoimg from "../../../../public/assets/icon/video-stories.webp"
import photoimg from "../../../../public/assets/icon/photo-stories.webp"
import Image from 'next/image'
const ShortTab = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>  <div className='flex gap-1 items-center'>
                        <Image
                            src={videoimg}
                            alt="Picture of the author"
                            className=' w-[18px] h-[18px]'
                        />
                        <p className='font-bold'>ভিডিও স্টোরি</p>
                    </div>
                    </Tab>
                    <Tab>
                    <div className='flex gap-1 items-center'>
                        <Image
                            src={photoimg}
                            alt="Picture of the author"
                            className=' w-[18px] h-[18px]'
                        />
                        <p className='font-bold'>ফটো স্টোরি</p>
                    </div>
                    </Tab>
                </TabList>

                <TabPanel>
                    <VideoStory></VideoStory>
                </TabPanel>
                <TabPanel>
                    <VideoStory></VideoStory>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShortTab;