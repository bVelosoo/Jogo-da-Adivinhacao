import * as Variables from "./variables.js"
import { openAlertError, closeAlertError } from "./alertError.js"
import {
  switchMainPage,
  switchPageOnEnter,
  switchSecondPage,
} from "./switchPage.js"

let randomNumber = Math.round(Math.random() * 10).toFixed(0)
let trys = 1

Variables.btnTry.addEventListener("click", validation)
Variables.tryAgain.addEventListener("click", switchSecondPage)
Variables.inputNumber.addEventListener("input", closeAlertError)
document.addEventListener("keypress", switchPageOnEnter)

function validation(event) {
  event.preventDefault()

  if (Variables.inputNumber.value == randomNumber) {
    switchMainPage()
  } else if (
    Variables.inputNumber.value > 10 ||
    Variables.inputNumber.value < 0 ||
    Variables.inputNumber.value == ""
  ) {
    openAlertError()
    trys--
  }
  Variables.messageResult.innerText = `Acertou em ${trys} tentativa(s)`

  Variables.inputNumber.value = ""
  trys++

  if (Variables.page1.classList.contains("hide")) {
    randomNumber = Math.round(Math.random() * 10).toFixed(0)
    trys = 1
  }

  console.log(`O número gerado é ${randomNumber}`)
}
