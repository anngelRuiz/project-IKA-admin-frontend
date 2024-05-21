import React from 'react';
import './rightside.css';
import Top from './Top/Top';
import RecentUpdates from './RecentUpdates/RecentUpdates';

const Rightside = () => {
    return(
        <div class="right">
            <Top></Top>
            <RecentUpdates/>
        </div>        
    );
};

export default Rightside;