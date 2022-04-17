import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import GameStatsTab from './GameStatsTab';
import GameGraphs from './GameGraphs';
import Achievements from './Achievements';

function GameStats(props:object){
    const [tabValue,setTabValue] = React.useState(0);

    const handleChange = (event:React.SyntheticEvent,newTabValue:number)=>{
        setTabValue(newTabValue);
    }
    console.log(tabValue);
    return(
        <div className="gameStatsContainer">
            <Tabs className="tabContainer" value={tabValue} onChange={handleChange}>
                <Tab className="tab" label="Statistics"/>
                <Tab className="tab" label="Achievements"/>
            </Tabs>
            <GameStatsTab value={tabValue} index={0}> <GameGraphs></GameGraphs> </GameStatsTab>
            <GameStatsTab value={tabValue} index={1}> <Achievements {...props}></Achievements> </GameStatsTab>
        </div>
        
    );
}

export default GameStats;