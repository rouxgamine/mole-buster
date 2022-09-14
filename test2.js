const squares = document.querySelectorAll('.square')
const mole1 = document.querySelector('.mole1')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score') 

let result = 0
let currentTime = 10 
// let hitPosition
let molePopUp 


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole1')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole1')
    
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++
            score.textContent = result
            // hitPosition = null
        }
    })
})

function moveMole() {
    molePopUp = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime 

    if (currentTime === 0) {
        clearInterval(countDownTimerId) 
        clearInterval(molePopUp)
       
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)



