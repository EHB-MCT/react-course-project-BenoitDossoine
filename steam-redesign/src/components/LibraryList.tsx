import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryGame from "../interfaces/LibraryGame";
import { gameService } from "../services/GamesService";
import { fetchGameList, fetchGameListSuccess } from "../Store/Games/Actions";
import { selectGameList, selectLoadingStatus } from "../Store/Games/Selector";
import { StoreState } from "../Store/store.types";
import LibraryTile from "./LibraryTile";
import Loader from "./Loader";

function LibraryList(){
    const [isLoading, setIsLoading] = React.useState(false);
    // const [libraryGames,setLibraryGames] = React.useState([] as LibraryGame[]);

    const libraryGames = useSelector<StoreState,LibraryGame[]>(
        selectGameList
    );

    const loadingStatus = useSelector<StoreState, boolean>(
        selectLoadingStatus
    );

    const dispatch = useDispatch();

    React.useEffect(()=>{
        if(libraryGames.length == 0){
            dispatch(fetchGameList());
            gameService.getLibraryGames()
                .then(response => dispatch(fetchGameListSuccess(response)));
        }
    },[dispatch]);

    const renderLibraryList = (libraryGames:LibraryGame[]) => {
        return libraryGames.map((game:LibraryGame)=>{
            return(<LibraryTile key={game.appid} {...game}/>)
        })
    };

    return (
        <div className="libraryList">
            {loadingStatus?
            <Loader/>:
            renderLibraryList(libraryGames)}
        </div>
    );
}

export default LibraryList;