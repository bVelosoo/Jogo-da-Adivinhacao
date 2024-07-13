import * as Variables from "./variables.js"

export function openAlertError(){
  Variables.alertError.classList.remove("hide")
}
export function closeAlertError(){
  Variables.alertError.classList.add("hide")
}