// Global Variables

const cursor = document.querySelector('.cursor')
const holes = document.querySelectorAll('.hole')
const scoreEl = document.querySelector('.score > span')
let startButton
let score = 0
let timer = 10

class Player {
    constructor(name,) {
        this.name = name;
        this.score = score;
    }
    getReady() {
        console.log('Next player get ready!')
    }
}

const player1 = new Player('John',)

const moles = ['mole1', 'mole2', 'mole3']



const mole1Rise = function mole1Appearance() {

    let mole1 = holes[Math.floor(Math.random() * holes.length)]
    const image = document.createElement('img')
    image.classList.add('mole')
    image.src = 'https://i.imgur.com/D2LxOmS.png'  // red bug 
    mole1.appendChild(image)

    image.addEventListener('click', () => {
        score += 10
        scoreEl.textContent = score
    })

    timer = setTimeout(() => {
        mole1.removeChild(image)
        mole1Appearance()
    }, 1500)
}

mole1Rise()


const mole2Rise = function mole2Appearance() {

    let mole2 = holes[Math.floor(Math.random() * holes.length)]

    const image = document.createElement('img')
    image.classList.add('mole')
    image.src = 'https://i.imgur.com/pSkVzn2.png'  // brown bug 
    mole2.appendChild(image)


    image.addEventListener('click', () => {
        score += 20
        scoreEl.textContent = score
    })

    timer = setTimeout(() => {
        mole2.removeChild(image)
        mole2Appearance()
    }, 1000)
}

mole2Rise()


const mole3Rise = function mole3Appearance() {

    let mole3 = holes[Math.floor(Math.random() * holes.length)]

    const image = document.createElement('img')
    image.classList.add('mole')
    image.src = "https://i.imgur.com/znE8VPi.png"  // green bug
    mole3.appendChild(image)


    image.addEventListener('click', () => {
        score += 30
        scoreEl.textContent = score
    })

    timer = setTimeout(() => {
        mole3.removeChild(image)
        mole3Appearance()
    }, 500)
}

mole3Rise()


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