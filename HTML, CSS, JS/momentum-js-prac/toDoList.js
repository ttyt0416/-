const toDoForm = document.querySelector(".js-toDoForm");
const toDoUl =  document.querySelector(".js-toDoUl");
const toDoInput = document.querySelector(".js-toDoInput");
const toDo_LS = 'toDo';
let toDoList = [];

function saveToDo(text) {
  localStorage.setItem(toDo_LS, JSON.stringify(toDoList));
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoUl.removeChild(li);
  const cleanToDos = toDoList.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDoList = cleanToDos;
  saveToDo();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function paintToDo (text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDoList.length+1;
  delBtn.innerText = "X";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoUl.appendChild(li);
  const toDoObj = {
    text : text,
    id : newId
  };
  toDoList.push(toDoObj);
  saveToDo();
}

function loadToDo () {
  const toDo = localStorage.getItem(toDo_LS) ;
  if(toDo!==null){
    const parsedToDo = JSON.parse(toDo);
    parsedToDo.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  } 
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();