class Calculator {
   constructor(previousNumber, currentNumber) {
      this.previousNumber = previousNumber
      this.currentNumber = currentNumber
      this.clear()
   }
   clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
   }
   
   delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
   }
   
   appendNumber(number) {
      if(number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() +  number.toString()
   }
   
   chooseOperation(operation) {
      if(this.currentOperand === '') return
      if(this.previousOperand !== '') {
         this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
   }
   
   compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if(isNaN(prev) || isNaN(current)) return
      switch(this.operation) {
         case '+':
            computation = prev + current
            break
         case '-':
            computation = prev + current
            break
         case '*':
            computation = prev * current
            break
         case '÷':
            computation = prev / current
            break
         default:
            return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
   }

   displayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if(isNaN(integerDigits)) {
         integerDisplay = '' 
      } else {
         integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
      }
      if(decimalDigits != null) {
         return `${integerDisplay}.${decimalDigits}`
      } else {
         return integerDisplay
      }
   }

   updateDisplay() {
      this.currentNumber.innerText = this.displayNumber(this.currentOperand)
      if(this.operation != null) {
         this.previousNumber.innerText = 
            `${this.displayNumber(this.previousOperand)} ${this.operation}`
      } else {
         this.previousNumber.innerText = ''
      }
   }
}

const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousNumber = document.querySelector('[data-previous-operand]')
const currentNumber = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousNumber, currentNumber)

numberButton.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
   })
})
operationButton.forEach(button => {
   button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
   })
})
equalsButton.addEventListener('click', () => {
   calculator.compute()
   calculator.updateDisplay()
})
allClearButton.addEventListener('click', () => {
   calculator.clear()
   calculator.updateDisplay()
})
deleteButton.addEventListener('click', () => {
   calculator.delete()
   calculator.updateDisplay()
})