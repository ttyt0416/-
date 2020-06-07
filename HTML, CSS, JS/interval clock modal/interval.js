const firstSlide = document.querySelector('.image:first-child');
const modalContainer = document.querySelector('.modalContainer');
const modalImage = document.querySelector('.modalImage:first-child');
const modalImages = document.querySelectorAll('.modalImage');
const clock = document.querySelector('.clock');
const btn = document.querySelector('.btn');

setInterval(slide, 5000);
setInterval(showTime, 1000);
btn.addEventListener('click', handleBtn);
window.addEventListener('click', handleWindowClick => handleWindowClick.target == modalContainer ? modalContainer.classList.remove("view") : false);

modalImages.forEach((a) => {
    a.addEventListener('click', modalSlide)})

function slide() {
    const currentSlide = document.querySelector('.show');

    if(currentSlide) {
        currentSlide.classList.remove('show');
        const nextSlide = currentSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('show');
        } else {
            firstSlide.classList.add('show');
        }
    } /*else {
        firstSlide.classList.add('show');
    }*/
}

function modalSlide() {
    const currentSlide = document.querySelector('.appear');

    if(currentSlide) {
        currentSlide.classList.remove('appear');
        const nextSlide = currentSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('appear');
        } else{
            modalImage.classList.add('appear');
        }
    } 
}


function showTime() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    clock.innerText = `${hour < 10? `0${hour}` : hour} : ${min <10? `0${min}` : min} : ${sec<10? `0${sec}` : sec}`
}


function handleBtn() {
    modalContainer.classList.add('view');
}