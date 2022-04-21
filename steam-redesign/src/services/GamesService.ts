import UserGame from "../interfaces/UserGame";
import { getRandomDate } from "../utils/randomDate";

class GamesService{
    private userId = "76561198090377206"

    public async getLibraryGames(){
        let tempGames = await fetch(`https://steam-redesign.herokuapp.com/userGames/?id=${this.userId}`)
            .then(response => response.json())
            .then(data => data.response.games);
        
                
        let gamePromise = await tempGames.map(async (game:UserGame) => {
            let gameInfo = await this.getGameInfo(game.appid)
            
            let completeGame = {
                appid: game.appid,
                img_icon_url:game.img_icon_url,
                playtime_forever: game.playtime_forever,
                last_played: getRandomDate(new Date(2022,2,1), new Date()),
                ...gameInfo
            };
            return completeGame

        })
        let games = Promise.all(gamePromise).then(games => games);
        
        return await games;
    }

    public async getGameInfo(gameId:number){
        let gameInfo = await fetch(`https://steam-redesign.herokuapp.com/game/?id=${gameId}`)
            .then(response => response.json())
            .then(data => data[gameId].data);
        return gameInfo;
    }
}

export const gameService = new GamesService();