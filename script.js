const container = document.querySelector(".container")
const mobile = document.querySelector(".mobile-container")
const subscribe = document.querySelector(".subscribe")
const mbtn = document.querySelector(".news")
const invalidEmail = document.querySelector(".error")
const success = document.querySelector(".success")
const dismiss = document.querySelector(".dismiss")
const form = document.querySelector ("form")
const input = document.querySelector(".champ")
const subittedEmail = document.querySelector(".submitted-email")

console.log(success,2)
form.onsubmit = submit;
success.onclick= submit
function submit(e){
    e.preventDefault();
    container.classList.add("hide")
success.classList.remove("hide")
}

