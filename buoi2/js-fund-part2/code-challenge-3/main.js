const info = {
    data1: {
        mark: {
            weights: 78,
            tall: 1.69
        },
        john: {
            weights: 92,
            tall: 1.95
        },
    },
    data2: {
        mark: {
            weights: 95,
            tall: 1.88
        },
        john: {
            weights: 85,
            tall: 1.76
        },
    },
}

function BMI(data) {
    let mass = data.weights
    let height = data.tall
    let result = mass / (height * height)
    return result.toFixed(1)
}

var markHigherBMI = BMI(info.data2.mark) > BMI(info.data2.john)

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMI(info.data2.mark)}) is higher than John's (${BMI(info.data2.john)})!`)
} else {
    console.log(`John's BMI (${BMI(info.data2.john)}) is higher than Mark's (${BMI(info.data2.mark)})!`)
}