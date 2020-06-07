const hovering = document.querySelector('.hovering');
const topMenu = document.querySelector('.topMenu')
const body = document.querySelector('body');

function handleHover() {
    document.body.classList.add('view');
}

function handleUnHover() {
    document.body.classList.remove('view');
}

hovering.addEventListener('mouseover', handleHover);
hovering.addEventListener('mouseout', handleUnHover);
topMenu.addEventListener('mouseover', handleHover);
topMenu.addEventListener('mouseout', handleUnHover);