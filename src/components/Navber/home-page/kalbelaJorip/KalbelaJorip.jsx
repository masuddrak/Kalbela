import React from 'react';
import Motamot from './components/Motamot';
import OnlineJorip from './components/OnlineJorip';
import JoripContainerTabs from './components/JoripContainerTabs';

const KalbelaJorip = () => {
    return (
        <div className='grid grid-cols-3 gap-3'>
            <Motamot></Motamot>
            <OnlineJorip></OnlineJorip>
            <JoripContainerTabs></JoripContainerTabs>
        </div>
    );
};

export default KalbelaJorip;