import React from "react";
import { gameService } from "../services/GamesService";
import LibraryTile from "./LibraryTile";

function LibraryList(){
    const [isLoading, setIsLoading] = React.useState(true);
    const [libraryGames,setLibraryGames] = React.useState([]);

    React.useEffect(()=>{
        gameService.getLibraryGames()
            .then(response => setLibraryGames(response))
            .then(()=>setIsLoading(false))
            .catch(error => console.log(error));
    },[]);

    const renderLibraryList = (libraryGames:any) => {
        console.log(libraryGames.response.games);
        // return "This is a game";
        return libraryGames.response.games.map((game:any)=>{
            return(<LibraryTile key={game.appid} game={game}/>)
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