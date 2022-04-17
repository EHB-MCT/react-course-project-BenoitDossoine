import LibraryGame from "../../interfaces/LibraryGame";

export interface GameListState{
    loading: boolean,
    error: string,
    list: LibraryGame[],
}

export const initialState = {
    loading: false,
    error: "",
    list: [],
}