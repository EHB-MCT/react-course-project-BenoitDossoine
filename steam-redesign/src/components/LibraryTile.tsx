import React from "react";
import { motion, TapInfo } from "framer-motion"
import {IoIosArrowDown} from "react-icons/io";

import LibraryGame from "../interfaces/LibraryGame";
import GameStats from "./GameStats";

function LibraryTile(props:LibraryGame){
    const [showStats, setShowStats] = React.useState(false);
    
    const handleClick = (event:MouseEvent, info:TapInfo)=>{
        setShowStats(!showStats);
    }

    const variants = {
        open: {rotate:180},
        closed:  {rotate:0}
    }
    
    
    
    const renderTile = (gameInfo:any)=>{
        return (
            <div className="libraryTile">
                <img src={`${gameInfo.header_image}`} alt="" />
                <div className="libraryTileInfo">
                    <h1>{gameInfo.name}</h1>
                    <p>Total playtime: {`${gameInfo.playtime_forever}`} hours</p>
                    <p>Last played: {gameInfo.last_played.toLocaleDateString()}</p>
                </div>

                <motion.button
                className="dropdownBtn"
                onTap={handleClick}
                animate={showStats?"open":"closed"}
                variants = {variants}
                >
                    <IoIosArrowDown/>
                </motion.button>
            </div>
        )
    }
    
    return(
        <div className="libraryTileContainer">
            {renderTile(props)}
            {showStats?
            <GameStats {...props.achievements}/>:
            null
            }
        </div>
    );
}

export default LibraryTile;