const dolphins = [97, 112, 101]
const koalas = [109, 95, 123]


function handleAverageScores(scores) {
    let avgScores = 0;
    scores.forEach(element => {
        avgScores += element
    });
    return (avgScores / scores.length);
}

if (handleAverageScores(dolphins) < 100 && (handleAverageScores(koalas) < 100)) {
    console.log("noteam win!!");
} else {
    if (handleAverageScores(dolphins) === handleAverageScores(koalas)) {
        console.log("two team draw!!")
    } else if (handleAverageScores(dolphins) > handleAverageScores(koalas)) {
        console.log("dolphins win!!")
    } else {
        console.log("koalas win!!")
    }
}