const openBtn = document.querySelector('.open');
const closeBtn = document.querySelectorAll('.closeBtn');
const modalContainer = document.querySelector('.modalContainer');
const aboutBtn = document.querySelector('.aboutBtn');
const galleryBtn = document.querySelector('.galleryBtn');
const eventBtn = document.querySelector('.eventBtn');
const reportBtn = document.querySelector('.reportBtn');
const aboutContainer = document.querySelector('.aboutContainer');
const galleryContainer = document.querySelector('.galleryContainer');
const eventContainer = document.querySelector('.eventContainer');
const reportContainer = document.querySelector('.reportContainer');
/*const things about button and container*/

/* sidemenu open and close*/

openBtn.addEventListener('click', handleOpenBtn);

function handleOpenBtn() {
    document.body.classList.toggle('show');
}

aboutBtn.addEventListener('click', handleClickAbout);
galleryBtn.addEventListener('click', handleClickGallery);
eventBtn.addEventListener('click', handleClickEvent);
reportBtn.addEventListener('click', handleClickReport);


closeBtn.forEach((e => {
    e.addEventListener('click', handleClose);
}))


function handleClickAbout() {
    aboutContainer.classList.add('view');
    galleryContainer.classList.remove('view');
    eventContainer.classList.remove('view');
    reportContainer.classList.remove('view');
}

function handleClickGallery() {
    aboutContainer.classList.remove('view');
    galleryContainer.classList.add('view');
    eventContainer.classList.remove('view');
    reportContainer.classList.remove('view');
}

function handleClickEvent() {
    aboutContainer.classList.remove('view');
    galleryContainer.classList.remove('view');
    eventContainer.classList.add('view');
    reportContainer.classList.remove('view');
}

function handleClickReport() {
    aboutContainer.classList.remove('view');
    galleryContainer.classList.remove('view');
    eventContainer.classList.remove('view');
    reportContainer.classList.add('view');
}

function handleClose() {
    aboutContainer.classList.remove('view');
    galleryContainer.classList.remove('view');
    eventContainer.classList.remove('view');
    reportContainer.classList.remove('view');
}

/*side menu open and close end*/

/*gallery start */

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const bottomImages = document.querySelectorAll('.bottomImage');
const firstImage = document.querySelector('.image:first-child');
const lastImage = document.querySelector('.image:last-child');
const firstBottomImage = document.querySelector('.bottomImage:first-child');
const lastBottomImage = document.querySelector('.bottomImage:last-child');

next.addEventListener('click', handleNext);
prev.addEventListener('click', handlePrev);

bottomImages.forEach((a => {
    a.addEventListener('click', handleImageClick);
}))

function handleImageClick() {
    const disappearSlide = document.querySelector('.disappear')
    disappearSlide.classList.remove('disappear');
    this.classList.add('disappear');

    source = this.src;

    const images = document.querySelectorAll('.image')
    images.forEach((a) => {
        imageSource = a.src;

        if(imageSource === source) {
            a.classList.add('appear');
        } else {
            a.classList.remove('appear');
        }
    })
}


function handleNext() {
    const appearSlide = document.querySelector('.appear');
    const disappearSlide = document.querySelector('.disappear');

    if(appearSlide) {
        appearSlide.classList.remove('appear');
        const nextSlide = appearSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('appear');
        } else {
            firstImage.classList.add('appear');
        } 
    } else {
        firstImage.classList.add('appear');
    }

    if(disappearSlide) {
        disappearSlide.classList.remove('disappear');
        const nextSlide = disappearSlide.nextElementSibling;

        if(nextSlide) {
            nextSlide.classList.add('disappear');
        } else {
            firstBottomImage.classList.add('disappear');
        }
    } else {
        firstBottomImage.classList.add('disappear');
    }

}

function handlePrev() {
    const appearSlide = document.querySelector('.appear');
    const disappearSlide = document.querySelector('.disappear');

    if(appearSlide) {
        appearSlide.classList.remove('appear');
        const prevSlide = appearSlide.previousElementSibling;

        if(prevSlide) {
            prevSlide.classList.add('appear');
        } else {
            lastImage.classList.add('appear');
        }
    } else {
        lastImage.classList.add('appear');
    }

    if(disappearSlide) {
        disappearSlide.classList.remove('disappear');
        const prevSlide = disappearSlide.previousElementSibling;

        if(prevSlide) {
            prevSlide.classList.add('disappear');
        } else {
            lastBottomImage.classList.add('disappear');
        }
    } else {
        lastBottomImage.classList.add('disappear');
    }
}

/*gallery End*/

/* make 'hello' draggable */

const hello = document.querySelector('.mainContainer');
const move = document.querySelector('.mainContainerTwo');

hello.addEventListener('dragstart', dragStart);
hello.addEventListener('dragover', dragOver);
hello.addEventListener('dragend', dragDrop);

move.addEventListener('dragstart', dragStartTwo);
move.addEventListener('dragover', dragOverTwo);
move.addEventListener('dragend', dragDropTwo);


let X;
let Y;
let XX;
let YY;

let Xx;
let Yy;
let XXx;
let YYy;



function dragStart(e) {
    X = e.clientX;
    Y = e.clientY;
}


function dragOver(e) {
    e.preventDefault();
}

function dragDrop(e) {
    XX = X - e.clientX;
    YY = Y - e.clientY;
    X = e.clientX;
    Y = e.clientY;

    hello.style.top = `${hello.offsetTop - YY}px`;
    hello.style.left = `${hello.offsetLeft - XX}px`;
}


function dragStartTwo(e) {
    Xx = e.clientX;
    Yy = e.clientY;
}

function dragOverTwo(e) {
    e.preventDefault();
}

function dragDropTwo(e) {
    XXx = Xx - e.clientX;
    YYy = Yy - e.clientY;
    Xx = e.clientX;
    Yy = e.clientY;

    move.style.top = `${move.offsetTop - YYy}px`;
    move.style.left = `${move.offsetLeft - XXx}px`;
}