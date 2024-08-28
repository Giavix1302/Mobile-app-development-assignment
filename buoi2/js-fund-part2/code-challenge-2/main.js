function calcTip(bills) {
    return bills.map((bill, index) => {
        if (bill >= 50 && bill <= 300) {
            return bill * 1.15
        } else {
            return bill * 1.2
        }
    })
}

console.log(calcTip([125, 555, 44]))