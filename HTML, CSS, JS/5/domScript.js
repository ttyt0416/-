const add = document.querySelector('.addUser');
const double = document.querySelector('.doubleMoney');
const show = document.querySelector('.millionaires');
const sort = document.querySelector('.sort');
const calc = document.querySelector('.calculate');
const main = document.querySelector('.main');

let date = [];

addPerson();
addPerson();
addPerson();

async function addPerson() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
    addData(newUser);
}   


function updateDOM(providedData = data) {
    main.innerHTML = `<h2><strong>person</strong>Wealth</h2>`;

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

function doubleWealth() {
    data = data.map(user => {
        return { ...user, money: user.money * 2 };
      });
    
      updateDOM();
}


function showMillionaires() {
    data = data.filter(user => user.money > 1000000);

  updateDOM();
}



function sortbyRichest() {
    data.sort((a, b) => b.money - a.money);

    updateDOM();
}


function calculateEntireWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

function formatMoney() {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function addData(obj) {
    data.push(obj);

    updateDOM();
}


add.addEventListener('click', addPerson);
double.addEventListener('click', doubleWealth);
show.addEventListener('click', showMillionaires);
sort.addEventListener('click', sortbyRichest);
calc.addEventListener('click', calculateEntireWealth);