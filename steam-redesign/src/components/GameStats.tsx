import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import GameStatsTab from './GameStatsTab';
import GameGraphs from './GameGraphs';
function GameStats(){
    const [tabValue,setTabValue] = React.useState(0);

    const handleChange = (event:React.SyntheticEvent,newTabValue:number)=>{
        setTabValue(newTabValue);
    }

    return(
        <div className="gameStatsContainer">
            <Tabs className="tabContainer" value={tabValue} onChange={handleChange}>
                <Tab className="tab" label="Statistics"/>
                <Tab className="tab" label="Achievements"/>
            </Tabs>
            <GameStatsTab value={tabValue} index={0}> <GameGraphs></GameGraphs> </GameStatsTab>
            <GameStatsTab value={tabValue} index={1}></GameStatsTab>
        </div>
        
    );
}

export default GameStats;