import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import LibraryGame from "../interfaces/LibraryGame";
import { gameService } from "../services/GamesService";
import { fetchGameList, fetchGameListSuccess } from "../Store/Games/Actions";
import { selectFilteredLibraryList, selectGameList, selectLoadingStatus } from "../Store/Games/Selector";
import { StoreState } from "../Store/store.types";
import LibraryTile from "./LibraryTile";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

function LibraryList(){
    let [searchParams,setSearchParams] = useSearchParams();
    let search = searchParams.get("search");

    const libraryGames = useSelector<StoreState,LibraryGame[]>(
        selectGameList
    );

    const filteredLibraryGames = useSelector<StoreState,LibraryGame[]>(
        (state)=>selectFilteredLibraryList(state,{search})
    )

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
            <>
            <SearchBar/>
            {search?renderLibraryList(filteredLibraryGames):renderLibraryList(libraryGames)}
            </>}
        </div>
    );
}

export default LibraryList;