import { createAction } from '@reduxjs/toolkit';
import LibraryGame from '../../interfaces/LibraryGame';


export const fetchGameList = createAction('@@GAMELIST/FETCH');
export const fetchGameListSuccess = createAction<LibraryGame[]>('@@GAMELIST/FETCHSUCCESS');