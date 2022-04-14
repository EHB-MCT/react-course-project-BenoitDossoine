import React from "react";
import { gameService } from "../services/GamesService";
import { getRandomDate } from "../utils/randomDate";
import GameStats from "./GameStats";

function LibraryTile(props:any){
    const [isLoading, setIsLoading] = React.useState(true);
    const [showStats, setShowStats] = React.useState(true);
    const [gameInfo,setGameInfo] = React.useState({});

    React.useEffect(()=>{
        gameService.getGameInfo(props.game.appid)
            .then(response => setGameInfo(response[props.game.appid]))
            .then(()=>setIsLoading(false))
            .catch(error => console.log(error));
    },[props.game.appid]);

    const handleClick = ()=>{
        setShowStats(!showStats);
    }
    
    const renderTile = (gameInfo:any)=>{
        // console.log(props);
        let lastPlayed = getRandomDate(new Date(2022,2,1), new Date());
        return (
            <div className="libraryTile">
                <img src={`${gameInfo.data.header_image}`} alt="" />
                <div className="libraryTileInfo">
                    <h1>{gameInfo.data.name}</h1>
                    <p>Total playtime: {`${props.game.playtime_forever}`} hours</p>
                    <p>Last played: {lastPlayed.toLocaleDateString()}</p>
                </div>
                <div className="dropdownBtn" onClick={handleClick}>More stats</div>
            </div>
            
        )
    }
    
    return(
        <div className="libraryTileContainer">
            {isLoading?
            <p>Loading...</p>:
            renderTile(gameInfo)}
            {showStats?
            <GameStats/>:
            null
            }
        </div>
    );
}

export default LibraryTile;