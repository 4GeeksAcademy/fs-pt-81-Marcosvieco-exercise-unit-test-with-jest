const sum = (num1, num2) => num1 + num2

const resta = (num1, num2) => num1 - num2

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euroValue) => {
    let  dollarValue = euroValue * 1.07
    return dollarValue
}

const fromDollarToYen = (dollarValue) => { 
    let  yenValue = (dollarValue / 1.07) * 156.5
    return yenValue
}

const fromYenToPound = (yenValue) => {
    let yenToEuro = yenValue / 156.5
    let  poundValue = yenToEuro * 0.87
    return poundValue
}


module.exports = {sum, resta, fromEuroToDollar, fromDollarToYen, fromYenToPound}