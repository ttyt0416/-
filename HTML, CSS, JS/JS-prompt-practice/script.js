const script = document.querySelector(".scription")

const first = prompt('Type your first name')
const second = prompt('Type your second name')
const old = prompt('type your age')

script.innerText = `Your full name is ${first} ${second}\n\ You are ${old} years old`;

const giveAge = alert(`roughly you lived ${parseInt(old)*50} days`);