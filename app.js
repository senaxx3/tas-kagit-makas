const computerChoiseDisplay = document.getElementById('computer-choise')
const userChoiseDisplay = document.getElementById('user-choise')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoise 
let computerChoise
let result 

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click' ,(e)=>{
    userChoise = e.target.id
    userChoiseDisplay.innerHTML = userChoise
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random()* possibleChoices.length+1)
    if(randomNumber === 1){
        computerChoice = 'tas'
    }
    if(randomNumber === 2){
        computerChoice = 'kagit'
    }
    if(randomNumber === 3){
        computerChoice = 'makas'
    }
    computerChoiseDisplay.innerHTML = computerChoice
}

function getResult (){
    if(computerChoice === userChoise){
        result = "Berabere!"
    }
    if(computerChoice == 'tas' && userChoise === 'makas'){
        result = "Maalesef kaybettiniz!"
    }
    if(computerChoice == 'tas' && userChoise === 'kagit'){
        result = "Tebrikler Kazandınız!"
    }
    if(computerChoice == 'kagit' && userChoise === 'makas'){
        result = "Tebrikler Kazandınız!"
    }
    if(computerChoice == 'kagit' && userChoise === 'tas'){
        result = "Maalesef kaybettiniz!"
    }
    if(computerChoice == 'makas' && userChoise === 'tas'){
        result = "Tebrikler Kazandınız!"
    }
    if(computerChoice == 'makas' && userChoise === 'kagit'){
        result = "Tebrikler Kazandınız!"
    }

    resultDisplay.innerHTML = result
}