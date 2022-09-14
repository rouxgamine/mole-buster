const squares = document.querySelectorAll('.square')
const mole1 = document.querySelector('.mole1')
const mole2 = document.querySelector('.mole2')
const mole3 = document.querySelector('.mole3')

const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score') 

let result = 0
let currentTime = 10 
// let hitPosition
// let timerId 


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole1')
    })

    squares.forEach(square => {
        square.classList.remove('mole2')
    })

    squares.forEach(square => {
        square.classList.remove('mole3')
    })

    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    // randomSquare.classList.add('mole1')
    // randomSquare.classList.add('mole2')    
    randomSquare.classList.add('mole3')    

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++
            score.textContent = result
        }
    })
})

// function moveMole1() {
//     timerId = setInterval(randomSquare, 1000)
// }

// moveMole1()

function countDown() {
        if (currentTime === 0) {
        clearInterval(countDownTimerId) 
        clearInterval(mole1PopUp)
        clearInterval(mole2PopUp)
        clearInterval(mole3PopUp)

        alert('GAME OVER! Your final score is ' + result)
    }
    currentTime--
    timeLeft.textContent = currentTime 
}
let mole1PopUp = setInterval(randomSquare, 1000)
// let mole2PopUp = setInterval(randomSquare, 1000)
// let mole3PopUp = setInterval(randomSquare, 1300)


let countDownTimerId = setInterval(countDown, 1000)
