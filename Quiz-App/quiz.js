

const startButton = document.querySelector('.start-btn')
const answerButtons = document.querySelector('#answer-btn')
const questionCona = document.querySelector('#question-cona')
const questionElement = document.getElementById('question')
const nextButton = document.getElementById('next-btn')
const cona = document.querySelector('.cona')



let shuffleQuestion
let currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
   currentQuestionIndex++
   nextQuestion()
})

function startQuiz() {
   console.log("B.R.R")
   startButton.classList.add('hide')
   shuffleQuestion = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0

   questionCona.classList.remove('hide')
   nextQuestion()

   console.log(questionElement)
}

function nextQuestion() {
   resetState()
   displayQuestion(shuffleQuestion[currentQuestionIndex])

}

function displayQuestion(question) {
   questionElement.innerText = question.question
   question.answer.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if(answer.correct) {
         button.dataset.correct = answer.correct }
      button.addEventListener('click', selectButton)
      answerButtons.appendChild(button)
   })
}

function resetState() {
   clearStatusClass(document.body)
   nextButton.classList.add('hide')
   while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild)
   }
}

function selectButton(e) {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtons.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
   })
   if(shuffleQuestion.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
   } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
   }
}

function setStatusClass(element, correct) {
   clearStatusClass(element)
   if(correct) {
      element.classList.add('correct')
   } else {
      element.classList.add('wrong')
      cona.classList.add('vibrate')
   }
}

function clearStatusClass(element) {
   element.classList.remove('correct')
   element.classList.remove('wrong')
   cona.classList.remove('vibrate')
}

const questions = [
   {
      question: "What's your name?",
      answer: [
         { text: 'EDDESS', correct: false },
         { text: 'DEVISS', correct: false },
         { text: 'IC Deis', correct: true },
         { text: 'IC', correct: false },
      ]
   },
   {
      question: "What's your religion?",
      answer: [
         { text: 'Islam', correct: true },
         { text: 'Christian', correct: false },
         { text: 'Hebrew', correct: false },
         { text: 'No Religion', correct: false },
      ]
   },
   {
      question: "What's your favorite number?",
      answer: [
         { text: '23', correct: true },
         { text: '27', correct: false },
         { text: '57', correct: false },
         { text: '13', correct: false },
      ]
   },
   {
      question: "What's your favorite color?",
      answer: [
         { text: 'Blue', correct: false },
         { text: 'Pink', correct: false },
         { text: 'Purple', correct: false },
         { text: 'Green', correct: true },
      ]
   }
]
console.log(answerButtons)