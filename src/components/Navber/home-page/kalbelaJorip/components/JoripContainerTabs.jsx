'use client'
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';

const JoripContainerTabs = () => {
    return (
        <div className='border border-1 p-2'>
            <Tabs>
                <TabList>
                    <Tab>
                        <p className='font-bold'>সর্বশেষ</p>
                    </Tab>
                    <Tab>
                        <p className='font-bold'>জনপ্রিয়</p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-2'>
                        <TabCard countNumber="1" title="‘মা তুমি ভালো থেক, আমি চিরদিনের জন্য চলে গেলাম"></TabCard>
                        <TabCard countNumber="2" title="‘মা তুমি ভালো থেক, আমি চিরদিনের জন্য চলে গেলাম"></TabCard>
                        <TabCard countNumber="3" title="‘মা তুমি ভালো থেক, আমি চিরদিনের জন্য চলে গেলাম"></TabCard>
                        <TabCard countNumber="4" title="‘মা তুমি ভালো থেক, আমি চিরদিনের জন্য চলে গেলাম"></TabCard>
                        <TabCard countNumber="5" title="‘কোয়ার্টারে ফর্মে থাকা উরুগুয়ের সামনে ব্রাজিল?"></TabCard>
                    </div>
                </TabPanel>
                <TabPanel>
                    hello
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JoripContainerTabs;