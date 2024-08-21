const dolphins = [96, 108, 89]
const koalas = [88, 91, 110]


function handleAverageScores(scores) {
    let avgScores = scores.reduce((total, score) => {
        return (total + score) / 2
    }, 0)
    return avgScores;
}

console.log(handleAverageScores(dolphins));