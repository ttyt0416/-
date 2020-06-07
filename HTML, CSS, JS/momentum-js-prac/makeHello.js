const form = document.querySelector(".js-form") ;
const input = form.querySelector("input") ;
const greeting = document.querySelector(".js-greeting") ;
const User_LS = "currentUser" ;
const Showing_CN = "showing" ;

function saveName(text) {
  localStorage.setItem(User_LS, text);
}

function handleSubmit(event) {
  event.preventDefault;
  const currentValue = input.value;
  paintHello(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(Showing_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintHello (text) {
  form.classList.remove(Showing_CN);
  greeting.classList.add(Showing_CN);
  greeting.innerText = `Hello ${text}` ;
  greeting.style.fontSize = "500%";
}

function loadName () {
  const currentUser = localStorage.getItem(User_LS) ;
  if(currentUser===null){
    askForName();
  } else {
    paintHello(currentUser);
  }
}

function init() {
  loadName() ;
}

init() ;