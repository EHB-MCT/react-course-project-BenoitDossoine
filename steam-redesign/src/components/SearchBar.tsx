import React from "react";
import {BiSearch} from "react-icons/bi"
import {useSearchParams} from "react-router-dom";

function SearchBar(){

    let [searchParams, setSearchParams] = useSearchParams();

    function addSearchQuery(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let search = formData.get("search") as string;
        const params = {search: `${search}`};
        setSearchParams(params);
    }

    return(
        <div className="searchBarContainer">
            <form className="searchForm" onSubmit={addSearchQuery}>
                <button id="searchBtn" type="submit"><BiSearch/></button>
                <input className="searchBar" type="text" name="search" autoComplete="off"/>
            </form>
        </div>
    )
}

export default SearchBar;