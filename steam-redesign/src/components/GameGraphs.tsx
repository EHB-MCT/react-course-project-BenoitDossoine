import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GameStatsTab from './GameStatsTab';
import MonthlyTimeGraph from './MonthlyTimeGraph';
import TotalTimeGraph from './TotalTimeGraph';

function GameGraphs(){
    const [tabValue,setTabValue] = React.useState(0);

    const handleChange = (event:React.SyntheticEvent,newTabValue:number)=>{
        setTabValue(newTabValue);
    }

    return(
        <div className="gameGraphsContainer">
            <Tabs orientation="vertical" className="graphTabContainer" value={tabValue} onChange={handleChange}>
                <Tab className="tab" label="Time played"/>
                <Tab className="tab" label="Total time"/>
            </Tabs>
            <GameStatsTab className="graphContainer" value={tabValue} index={0}><MonthlyTimeGraph></MonthlyTimeGraph></GameStatsTab>
            <GameStatsTab className="graphContainer" value={tabValue} index={1}> <TotalTimeGraph></TotalTimeGraph></GameStatsTab>
        </div>
        );
}

export default GameGraphs;