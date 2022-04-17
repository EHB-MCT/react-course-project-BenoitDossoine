import { GameListState, initialState } from './InitialState';
import { createReducer } from "@reduxjs/toolkit";
import * as ACTIONS from './Actions';

export const GameListReducer = createReducer<GameListState>(
    initialState,
    (builder)=>{
        builder.addCase(ACTIONS.fetchGameList, (state):GameListState => {
            return{
                ...state,
                loading: true,
                error: "",
                list: [],
            }
        })

        builder.addCase(ACTIONS.fetchGameListSuccess, (state,action):GameListState => {
            return {
                ...state,
                loading: false,
                error: "",
                list: action.payload,
            }
        })
    }
)