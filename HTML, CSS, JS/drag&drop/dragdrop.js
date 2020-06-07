const drag = document.querySelector('.draglist');
const checkBtn = document.querySelector('.checkBtn');

const peopleList = [
    'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
];

const list = [];

let dragStartIndex;

creatList();

function creatList () {
  [...peopleList]
    .map(a=> ({value: a, sort: Math.random() }))
    .sort((a,b) => a.sort - b.sort)
    .map(a=>a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
      <span class="number">${index+1}</span>
      <div class="draggable" draggable="true">
        <p class="person">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
      `;

      list.push(listItem);

      drag.appendChild(listItem);

    });
  
  addEventListeners();
}



function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draglist li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  })

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave',dragLeave);
  })

}


function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index')
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = + this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
  const itemOne = list[fromIndex].querySelector('.draggable');
  const itemTwo = list[toIndex].querySelector('.draggable');

  list[fromIndex].appendChild(itemTwo);
  list[toIndex].appendChild(itemOne);
}


function checkOrder() {
  list.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== peopleList[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}

checkBtn.addEventListener('click', checkOrder);