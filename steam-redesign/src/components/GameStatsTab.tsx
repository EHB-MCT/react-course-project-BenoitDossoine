function GameStatsTab(props:any){
    const {children, value, index, ...other} = props;

    return(
        <div
        hidden={value!==index}>
            This is tab {index}!
        </div>
    )
}

export default GameStatsTab;