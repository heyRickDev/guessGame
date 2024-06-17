//variables
const inputEntry = document.querySelector("#entry")
const guessScreen = document.querySelector(".guessscreen")
const congratScreen = document.querySelector(".congratscreen")
const attemptsMessage = document.querySelector("#attemptsmsg")
const tryButton = document.querySelector("#trybtn")
const restartButton = document.querySelector("#restartbtn")
let randomNumber = Math.round(Math.random() * 10)
let attempts = 1
console.log(randomNumber)

//listeners
tryButton.addEventListener("click", handleTryClick)
restartButton.addEventListener("click", restartGameClick)
document.addEventListener("keydown", checkKeyPressed)

//functions
function generateNumber() {
  randomNumber = Math.round(Math.random() * 10)
}
function checkKeyPressed(e) {
  if (e.key == "Enter" && guessScreen.classList.contains("hide")) {
    restartGameClick()
  }
}
function handleTryClick(event) {
  event.preventDefault()

  if (inputEntry.value >= 0 && inputEntry.value <= 10) {
    validNumber()
    if (Number(inputEntry.value) == randomNumber) {
      if (attempts == 1) {
        toggleScreen()
        attemptsMessage.innerHTML = `BullsEye! You only needed one shot to make it!`
      } else {
        toggleScreen()
        attemptsMessage.innerHTML = `Nice! It tooks ${attempts} attempts`
      }
    } else {
      attempts++
    }
    inputEntry.value = ""
  } else {
    console.log("Erro, número invalido!")
    console.log(`Tentativas ${attempts}`)
    invalidNumber()
    inputEntry.value = ""
  }
}
function restartGameClick() {
  toggleScreen()
  generateNumber()
  attempts = 1
  console.log(randomNumber)
}
function toggleScreen() {
  guessScreen.classList.toggle("hide")
  congratScreen.classList.toggle("hide")
}
function invalidNumber() {
  inputEntry.classList.add("error")
}
function validNumber() {
  inputEntry.classList.remove("error")
}
