const body = document.querySelector('body');
const bgImages = ['bgImage1', 'bgImage2', 'bgImage3', 'bgImage4', 'bgImage5', 'bgImage6'];
const randomBgImg = bgImages[Math.floor(Math.random()*bgImages.length)];

/*
function genRandom() {
  const number = Math.floor(Math.random()*imgNumber);
  return number;
}


function paintBackground() {
  const image = new Image() ;
  image.src = "https://images.unsplash.com/12/sun-trees.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60.png";
  image.classList.add('bgImage');
}
*/

function paintBack() {
  body.classList.add(randomBgImg);
}

function init() {
  
  paintBack();
}


init();