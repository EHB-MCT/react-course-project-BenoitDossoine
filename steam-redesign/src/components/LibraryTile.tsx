import React from "react";
import LibraryGame from "../interfaces/LibraryGame";
import GameStats from "./GameStats";

function LibraryTile(props:LibraryGame){
    console.log(props);
    const [isLoading, setIsLoading] = React.useState(false);
    const [showStats, setShowStats] = React.useState(false);
    
    const handleClick = ()=>{
        setShowStats(!showStats);
    }
    
    
    
    const renderTile = (gameInfo:any)=>{
        // console.log(props);
        return (
            <div className="libraryTile">
                <img src={`${gameInfo.header_image}`} alt="" />
                <div className="libraryTileInfo">
                    <h1>{gameInfo.name}</h1>
                    <p>Total playtime: {`${gameInfo.playtime_forever}`} hours</p>
                    <p>Last played: {gameInfo.last_played.toLocaleDateString()}</p>
                </div>
                <div className="dropdownBtn" onClick={handleClick}>More stats</div>
            </div>
            
        )
    }
    
    return(
        <div className="libraryTileContainer">
            {isLoading?
            <p>Loading...</p>:
            renderTile(props)}
            {showStats?
            <GameStats {...props.achievements}/>:
            null
            }
        </div>
    );
}

export default LibraryTile;