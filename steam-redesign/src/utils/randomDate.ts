function getRandomDate(start:Date,end:Date){
    let date = new Date(start.getTime() + Math.random()* (end.getTime() - start.getTime()));
    return date;
}

export {getRandomDate}