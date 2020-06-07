const modalContainer = document.querySelector('.modalContainer');
const start = document.querySelector('.start');
const closeBtn = document.querySelector('.close');
const columnOne = document.querySelector('.columnOne');
const columnTwo = document.querySelector('.columnTwo');

/*modal open and close*/
function handleStart() {
    modalContainer.classList.add('view');
    if (columnOne.childNodes.length<4 && columnTwo.childNodes.length<4) {
        getColors1();
        getColors2();
    } else {}
}

function handleClose() {
    modalContainer.classList.remove('view');
}


start.addEventListener('click', handleStart);
closeBtn.addEventListener('click', handleClose);

/*modal end*/


/*things in modal*/

const colorList = [
    'blue',
    'red',
    'purple',
    'orange',
    'yellow',
];

function getColors1 () {

        [...colorList]
            .map(a => ({value: a, sort:Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value)
            .forEach((color) => {
                const listItem = document.createElement('div');
                

                listItem.innerHTML = `
                <div class="draggable ${color}" draggable=true style="background-color: ${color}">
                </div>
                `;

                

                columnOne.appendChild(listItem);

                
            })
    addEventListeners();
}

function getColors2() {
    [...colorList]
        .map(a => ({value: a, sort:Math.random()}))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((color) => {
            const listItem = document.createElement('div');
            listItem.setAttribute('data-index', color);

            listItem.innerHTML = `
            <div class="draggable ${color}" draggable=true style="background-color: ${color}">
            </div>
            `;

            

            columnTwo.appendChild(listItem);

        })
    addEventListeners();
}


function addEventListeners() {
    draggables = document.querySelectorAll('.draggable')
    
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
        draggable.addEventListener('dragover', dragOver);
        draggable.addEventListener('drop', dragDrop);
    })
}

let dragStartIndex;

function dragStart() {
    dragStartIndex = this.closest('div').className;
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = this.className;
    judge(dragStartIndex, dragEndIndex);
}

function judge(fromIndex, toIndex) {

    const from = document.getElementsByClassName(fromIndex)[0];
    const to = document.getElementsByClassName(toIndex)[1];
    
    if (from.className === to.className) {

        /*from.parentNode.removeChild(from);
        to.parentNode.removeChild(to);*/

        columnOne.removeChild(from.parentNode);
        columnTwo.removeChild(to.parentNode);

    } else if (fromIndex == toIndex) {

    }

    
}