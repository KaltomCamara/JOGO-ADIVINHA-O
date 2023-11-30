const screen1 =  document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber= Math.round(Math.random() * 10) 
let attempts = 1

function tryClick(event) {
    event.preventDefault()

    if(Number(number.value) == randomNumber){
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document.querySelector(".screen2 h1")
        .innerText = `Acertou em ${attempts} tentativas!`      
    }    
    
    number.value=""
    attempts++
    
}

const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")

btnTry.addEventListener('click', tryClick)
btnAgain.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    
    number.value = ""
    attempts = 1
})