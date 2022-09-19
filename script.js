
class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    getReady() {
        // player.textContent = `${player_1.name}, get ready!`
      
    }

    displayTheWinner() {
        console.log('The winner is..')
    }
}

const player1 = new Player('Player 1')

// player1.getReady() 
// player.textContent = `${player1.name}, get ready!`

// player1.displayTheWinner()


// class Bug {
//     constructor() {

//         this.clockTimer = 10;
//         this.image = {
//             redBug: "https://i.imgur.com/D2LxOmS.png",
//             greenBug: "https://i.imgur.com/znE8VPi.png",
//             brounBug: "https://i.imgur.com/pSkVzn2.png"
//         }
//     }
//     createRandomNumber() {
//         console.log(holes[Math.floor(Math.random() * holes.length)])
//     }
// }

// const mole1 = new Bug()
// const mole2 = new Bug()
// const mole3 = new Bug()

// mole1.createRandomNumber()
// mole2.createRandomNumber()
// mole3.createRandomNumber()



/* ======================
GLOBAL VARS
=========================*/

const cursor = document.querySelector('.cursor')
const holes = document.querySelectorAll('.hole')
const scoreEl = document.querySelector('.score > span')
const timeLeft = document.querySelector('.time-left > span')
const startBtn = document.querySelector('.start')
const player = document.querySelector('.player')
const welcomeBtn = document.querySelector('#welcomeBtn')
const board = document.getElementById('board')

let score = 0
let clockTimer = 10
let timer = null


/* =============================
EVENT LISTENERS
============================= */

window.addEventListener('mousemove', (evt) => {
    cursor.style.top = evt.pageY + 'px'
    cursor.style.left = evt.pageX + 'px'
})

window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

welcomeBtn.addEventListener('click', (evt) => {
    board.style.display = 'block';
    welcomeBtn.style.display = 'none'
})

startBtn.addEventListener('click', () => {
    function countDown () {
        clockTimer--
        timeLeft.textContent = clockTimer 
        if (clockTimer === 0) {
            clearInterval(countDownTimer)
            clearInterval(timer)
        
            // alert ("Time's Up! Your score is" + score)
        }
    }
   

const mole1Rise = function mole1Appearance () {

    let mole1 = holes[Math.floor(Math.random() * holes.length)]
    
    const image = document.createElement('img')
    image.classList.add('mole')
    image.src = 'https://i.imgur.com/D2LxOmS.png'  // red bug 
    mole1.appendChild(image)

    image.addEventListener('click', () => {
        score += 10
        scoreEl.textContent = score
    })

    setTimeout(() => {
        mole1.removeChild(image)
        mole1Appearance()
    }, 5000)
}
mole1Rise()


const mole2Rise = function mole2Appearance () {

    let mole2 = holes[Math.floor(Math.random() * holes.length)]

    const image = document.createElement('img')
    image.classList.add('mole')
    image.src = 'https://i.imgur.com/pSkVzn2.png'  // brown bug 
    mole2.appendChild(image)

    image.addEventListener('click', () => {
        score += 20
        scoreEl.textContent = score
    })

    setTimeout(() => {
        mole2.removeChild(image)
        mole2Appearance()
    }, 2000)
}
mole2Rise()

const mole3Rise = function mole3Appearance () {

    let mole3 = holes[Math.floor(Math.random() * holes.length)]

    const image = document.createElement('img')
    image.classList.add('mole')
    image.src = "https://i.imgur.com/znE8VPi.png"  // green bug
    mole3.appendChild(image)


    image.addEventListener('click', () => {
        score += 30
        scoreEl.textContent = score
    })
    console.log(mole3)
    setTimeout(() => {
        mole3.removeChild(image)
        mole3Appearance()
    }, 1000)
}

mole3Rise()

let countDownTimer = setInterval(countDown, 1000)
})