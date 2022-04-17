import React from "react";
import LibraryGame from "../interfaces/LibraryGame";
import { gameService } from "../services/GamesService";
import LibraryTile from "./LibraryTile";

function LibraryList(){
    const [isLoading, setIsLoading] = React.useState(true);
    const [libraryGames,setLibraryGames] = React.useState([] as LibraryGame[]);

    React.useEffect(()=>{
        gameService.getLibraryGames()
            .then(response => setLibraryGames(response))
            .then(()=>setIsLoading(false))
            .catch(error => console.log(error));
    },[]);

    const renderLibraryList = (libraryGames:LibraryGame[]) => {
        console.log(libraryGames);
        return libraryGames.map((game:LibraryGame)=>{
            return(<LibraryTile key={game.appid} {...game}/>)
        })
    };

    
    return (
        <div className="libraryList">

            {isLoading?
            "This page is loading":
            renderLibraryList(libraryGames)}
        </div>
    );
}

export default LibraryList;