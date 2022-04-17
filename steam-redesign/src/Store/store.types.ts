import { Store } from 'redux';
import { GameListState } from './Games/InitialState';

export interface StoreState extends Store{
    gameList: GameListState
}