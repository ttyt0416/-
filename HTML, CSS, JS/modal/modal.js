const modalBtn = document.querySelector('.signUp');
const modalContainer = document.querySelector('.modalContainer');
const submit = document.querySelector('.submit');
const closeBtn = document.querySelector('.close');
const aside = document.querySelector('.aside');
const bar = document.querySelector('.bar');

function handleBar () {
    document.body.classList.toggle("view");
}

function handleClose () {
    modalContainer.classList.remove("view");
}

function modalClick() {
    modalContainer.classList.add("view");
}



modalBtn.addEventListener('click', modalClick);
closeBtn.addEventListener('click', handleClose);
bar.addEventListener('click', handleBar);
window.addEventListener('click', handleWindowClick => handleWindowClick.target == modalContainer ? modalContainer.classList.remove("view") : false);
submit.addEventListener('click', () => modalContainer.classList.remove("view"));