function GameStatsTab(props:any){
    const {children, value, index, ...other} = props;

    return(
        <div
        hidden={value!==index}>
            {children}
        </div>
    )
}

export default GameStatsTab;