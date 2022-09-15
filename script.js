const cursor = document.querySelector('.cursor')
const holes = document.querySelectorAll('.hole')
const scoreEl = document.querySelector('.score > span')
let score = 0
let timer = 10

function run() {
    
    let randomMole = holes[Math.floor(Math.random() * holes.length)]
    // let timer1 = null
    
    const image = document.createElement('img')   
    image.classList.add('mole')
    image.src = "https://i.imgur.com/znE8VPi.png"
    randomMole.appendChild(image)


    image.addEventListener('click', () => {
        score += 10
        scoreEl.textContent = score 
    })

    // timer1 = setTimeout(() => {
    //     randomMole.removeChild(image)
    //     run()
    // }, 1500)

}
run()


setInterval(() => {
    timer--
    if (timer === 0) 
}, interval);


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