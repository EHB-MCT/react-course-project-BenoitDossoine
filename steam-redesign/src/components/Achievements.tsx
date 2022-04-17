function Achievements(props:any){
    console.log(props);
    let achievements = props.highlighted;
    console.log(achievements);
    return(
        <div className="achievementContainer">
            {achievements.map((achievement:any)=>{
                return (
                    <div className="achievement" key={achievement.name}>
                        <img src={achievement.path} alt={achievement.name} />
                        <p>{achievement.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Achievements;