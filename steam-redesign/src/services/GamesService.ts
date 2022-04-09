class GamesService{
    private userId = "76561198090377206"

    public async getLibraryGames(){
        let response = await fetch(`https://steam-redesign.herokuapp.com/userGames/?id=${this.userId}`);
        return response.json();
    }

    public async getGameInfo(gameId:number){
        let response = await fetch(`https://steam-redesign.herokuapp.com/game/?id=${gameId}`);
        return response.json();
    }
}

export const gameService = new GamesService();