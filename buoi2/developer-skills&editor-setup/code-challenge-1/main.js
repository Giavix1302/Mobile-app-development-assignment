function printForecast(tems) {
    return tems.map((tem, index) => {
        return `${tem}'C in ${index+1} days`
    }).join("...")
}

console.log(printForecast([17, 21, 23]))