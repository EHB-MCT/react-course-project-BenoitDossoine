import { GameListState } from './InitialState';
import { StoreState } from './../store.types';
import { createSelector } from '@reduxjs/toolkit';

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