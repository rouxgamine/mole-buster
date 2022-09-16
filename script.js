// Global Variables

const cursor = document.querySelector('.cursor')
const holes = document.querySelectorAll('.hole')
const scoreEl = document.querySelector('.score > span')
let startButton 
let score = 0
let timer = 10

class Player {
    constructor(name, ) {
        this.name = name;
        this.score = score;
    }
    getReady() {
        console.log('Next player get ready!')
    }
}

const player1 = new Player('John', )

const moles = ['mole1', 'mole2', 'mole3']

function run() {
    
    let mole1 = holes[Math.floor(Math.random() * holes.length)]
    // let timer1 = null
    
    const image = document.createElement('img')   
    image.classList.add('mole')
    image.src = "https://i.imgur.com/znE8VPi.png"
    mole1.appendChild(image)


    image.addEventListener('click', () => {
        score += 10
        scoreEl.textContent = score 
    })

    // timer1 = setTimeout(() => {
    //     mole1.removeChild(image)
    //     run()
    // }, 1500)

}
run()


// setInterval(() => {
//     timer--
//     if (timer === 0) 
// }, interval);


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