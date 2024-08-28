function calcAverage(scores) {
    let size = scores.length
    let sum = 0;
    for (i = 0; i < size; i++) {
        sum += scores[i];
    }
    return sum / size;
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= avgKoalas * 2) {
        console.log("Dolphins win")
    } else if (avgKoalas >= avgDolhins * 2) {
        console.log("Koalas win")
    } else {
        console.log("no team win")
    }
}

checkWinner(calcAverage([44, 23, 71]), calcAverage([65, 54, 49]))