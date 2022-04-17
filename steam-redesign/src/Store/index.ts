import { GameListReducer } from './Games/Reducer';
import { GameListState } from './Games/InitialState';
import { useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import thunk from 'redux-thunk';
import { TypedUseSelectorHook } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers<Reducer>({
    gameList: GameListReducer
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const useTypedSelector: TypedUseSelectorHook<GameListState> = useSelector;