const myArray = ["Ziege", "Rinder_muh", "lion"];
document.addEventListener('DOMContentLoaded', init)

function init() {
    myArray.forEach((item) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'animal ' + item)
        // div.classList.add('animal')
        div.innerText = item.toUpperCase()
        div.addEventListener('click', () => {
            playIt(item)
        })
        document.body.appendChild(div)
    })
} 

function playIt(name) {
    let activeEle = document.querySelector(`.${name}`)
    let sound1 = new Audio(`sound/${name}.mp3`)
    sound1.play()
    activeEle.classList.add('active')
    setTimeout(() => {
        activeEle.classList.remove('active')
    },2000)
}

console.log(window);