let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// ------ Operator -------
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})

// ----- Samadengan ------
const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

// ----- Kalkulasi -----
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*" :
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/" :
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

// ----- Menghitung Persen -----
inputPercentage = (percentage) => {
    if(currentNumber.includes('%')){
        return
    }
    currentNumber = currentNumber / 100
}
const percentage = document.querySelector('.percentage')
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
})

// ----- Delete ------
const deletes = document.querySelector(".delete");
const inputdelete = (deletes) => {
   prevNumber = currentNumber;
   currentNumber = currentNumber.slice(0, -1); 
}

deletes.addEventListener('click', (event) => {
    inputdelete(event.target.value)
    updateScreen(currentNumber)
})

// ----- Clear All -----
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// ----- Decimal -----
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
   if (currentNumber.includes('.')) {
       return
   }
   currentNumber += dot
}
