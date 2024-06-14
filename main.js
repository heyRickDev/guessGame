//variables
const randomNumber = Math.round(Math.random() * 10)
const inputEntry = document.querySelector("#entry")
const guessScreen = document.querySelector(".guessscreen")
const congratScreen = document.querySelector(".congratscreen")
const attemptsMessage = document.querySelector("#attemptsmsg")
const tryButton = document.querySelector("#trybtn")
const restartButton = document.querySelector("#restartbtn")
let attempts = 1
//listeners
tryButton.addEventListener("click", handleTryClick)
restartButton.addEventListener("click", restartGameClick)
document.addEventListener("keydown", function (e) {
  console.log(e.key)
  if (e.key === "Enter") {
    restartGameClick()
  }
})
//functions
function handleTryClick(event) {
  event.preventDefault()

  if (Number(inputEntry.value) == randomNumber) {
    if (attempts == 1) {
      toggleScreen()
      attemptsMessage.innerHTML = `BullsEye! You only needed one shot to make it!`
    } else {
      attemptsMessage.innerHTML = `Nice! It tooks ${attempts} attempts`
    }
  } else {
    attempts++
  }

  inputEntry.value = ""
}
function restartGameClick() {
  toggleScreen()
  attempts = 1
}
function toggleScreen() {
  guessScreen.classList.toggle("hide")
  congratScreen.classList.toggle("hide")
}
