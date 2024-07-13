import * as Variables from "./variables.js"

export function switchPageOnEnter(e) {
  if (e.key == "Enter" && Variables.page1.classList.contains("hide")) {
    switchSecondPage()
  }
}

export function switchMainPage() {
  Variables.page1.classList.add("hide")
  Variables.page2.classList.remove("hide")
}

export function switchSecondPage() {
  Variables.page1.classList.remove("hide")
  Variables.page2.classList.add("hide")

}
