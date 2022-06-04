window.addEventListener('DOMContentLoaded', () => {
const selection = document.querySelectorAll('.choices'),
      modal = document.querySelector('.modal'),
      result = document.querySelector('#result'),
      restart = document.getElementById('restart'),
      points = document.getElementById('score'),
      pointsBoard = {
         player: 0,
         computer: 0,
         draw: 0
      };
let choices = document.querySelectorAll('.choices')

function playgame(event) {
   restart.style.display = 'inline-block'
   const computerChoice = getComputerChoice()
   const meChose = event.target.id
   const winner = getWinner(meChose, computerChoice) 
   showWinner(winner, computerChoice)
}

function getComputerChoice() {
   let ranNum = Math.random()
   if(ranNum <= 0.33)
      return 'rock'
   else if(ranNum <= 0.66)
      return 'paper'
   else
      return'scissors'
}

function getWinner(p,c) {
   if(p === c)
      return 'draw'
   else if(p === 'rock') {
      if(c === 'paper')
         return 'computer'
      else
         return 'player'
   } else if(p === 'paper') {
      if(c === 'scissors')
         return 'computer'
      else
         return 'player'
   } else if(p === 'scissors') {
      if(c === 'rock')
         return 'computer'
      else
         return 'player'
   }
}

function showWinner(winner, computerChoice) {
   if(winner === 'player') {
      pointsBoard.player++
      result.innerHTML = `
         <h1 class="text-win">You win</h1>
         <i class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
         `
   } else if(winner === 'computer') {
      pointsBoard.computer++
      result.innerHTML = `
         <h1 class="text-lose">Computer win</h1>
         <i  class="fas fa-hand-${computerChoice} fa-10x"></i>
         <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
         `
   } else if(winner = 'draw'){
      pointsBoard.draw++
      result.innerHTML = `
      <h1>It's a Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
      `
   }
   points.innerHTML = `
      <p>Player: ${pointsBoard.player}</p>
      <p>Computer: ${pointsBoard.computer}</p>
      <p>Draw: ${pointsBoard.draw}</p>
      `
   modal.style.display = 'block'
}

function resetGame() {
   pointsBoard.player = 0
   pointsBoard.computer = 0
   pointsBoard.draw = 0
   points.innerHTML = `
      <p>Player: ${pointsBoard.player}</p>
      <p>Computer: ${pointsBoard.computer}</p>
      <p>Draw: ${pointsBoard.draw}</p>`
   restart.style.display = 'none'
}

function clearEvent(event) {
   if(event.target === modal)
      modal.style.display = 'none'      
}


choices.forEach(select => select.addEventListener('click', playgame))
window.addEventListener('click', clearEvent)
restart.addEventListener('click', resetGame)

})