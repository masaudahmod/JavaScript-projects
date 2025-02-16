let gameChance = 15
document.getElementById("playerChance").innerHTML = gameChance
let startGame = document.getElementById("startGame")
let attemts = 0
let resetGame = document.getElementById("resetGame")

startGame.addEventListener("click", function(){

    document.getElementById("playerOne").style.transform = "translate(-50%, -50%) scale(1)"

})
document.getElementById("playerOneClose").addEventListener("click", function(){

    document.getElementById("playerOne").style.transform = "translate(-50%, -50%) scale(0)"

})
// player One start

let playerOneSubmit = document.getElementById("playerOneSubmit")
let playerOneInput = document.getElementById("playerOneInput")

let numberError = ''

playerOneSubmit.addEventListener("click", function(){
    
    if(playerOneInput.value == ""){
        numberError = "please enter a number"
        document.getElementById("playerOneError").innerText = numberError
    }
    else if (playerOneInput.value > 9){
        numberError = "please must enter number around 9"
        document.getElementById("playerOneError").innerText = numberError
    }
    else if(playerOneInput.value <= 0){
        numberError = "please must enter number 1 or more"
        document.getElementById("playerOneError").innerText = numberError
    }
    else{
        document.getElementById("playerOne").style.transform = "translate(-50%, -50%) scale(0)"

        document.querySelector('.player_two').style.transform = "translate(-50%, -50%) scale(1)"
        
    }

})

// player One end
// player two start

let playerTwoSubmit = document.getElementById("playerTwoSubmit")
let playerTwoInput = document.getElementById("playerTwoInput")

document.getElementById("playerTwoClose").addEventListener("click", function(){

    document.querySelector('.player_two').style.transform = "translate(-50%, -50%) scale(0)"
    resetGame.style.transform = "scale(1)"

})

let playerTwoErrorText = ''

playerTwoSubmit.addEventListener("click", function(){

    attemts++
    
    let playerTwoError = document.getElementById("playerTwoError")

    if(playerTwoInput.value === ""){
        playerTwoErrorText = "please enter your guessing number"
        playerTwoError.innerHTML = playerTwoErrorText

    }
    else if(playerTwoInput.value <= 0){
        playerTwoErrorText = 'you must enter the number atleast 0 or more'
        playerTwoError.innerHTML = playerTwoErrorText

    }
    else if(playerTwoInput.value > 9){

        playerTwoErrorText = 'your number will have to around 9 or less'
        playerTwoError.innerHTML = playerTwoErrorText

    }
    else if(playerTwoInput.value == playerOneInput.value){
        console.log('win')

        alert(`wow great winner & you are win with ${attemts} Attempts`)

        location.reload()
    }
    else{
        playerTwoErrorText = 'Wrong Number please try again'
        playerTwoError.innerHTML = playerTwoErrorText
            gameChance--
            document.getElementById("playerChance").innerHTML = gameChance
            if(gameChance == 0){
                alert('Sorry! Try Again Men!')
                location.reload()
            }

    }
})

resetGame.addEventListener("click", function(){

    location.reload()

})

// player two end

