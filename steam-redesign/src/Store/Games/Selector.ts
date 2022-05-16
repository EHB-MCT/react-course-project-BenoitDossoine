import { GameListState } from './InitialState';
import { StoreState } from './../store.types';
import { createSelector } from '@reduxjs/toolkit';
import Filter from '../../interfaces/Filter';
import Fuse from 'fuse.js';

export const gameListStateSelector = (
    state: StoreState
): GameListState => state.gameList;

export const selectGameList = createSelector(
    gameListStateSelector,
    (state:GameListState) => state?.list || []
);

export const selectLoadingStatus = createSelector(
    gameListStateSelector,
    (state:GameListState) => state?.loading || false
);

export const selectFilteredLibraryList = createSelector(
    [(store:StoreState)=>store.gameList.list,
    (state,searchParameters:Filter)=>searchParameters],
    (list, searchParameters) => {
        let filteredList = [...list];
        if(searchParameters.search){
            const searchOptions = {
                includeScore: true,
                keys: ['name', 'librarygame.name']
            }
            const fuse = new Fuse(filteredList,searchOptions);
            const result = fuse.search(searchParameters.search??"");
            filteredList = result.map(result => result.item);
        }
        return filteredList;
    }
)