const userName = document.querySelector(".userName");
const mail = document.querySelector(".mail");
const password = document.querySelector(".passWord");
const passwordAgain = document.querySelector(".passWordAgain");
const validation = document.querySelector(".validation");



function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
      if(input.value.trim() === '') {
        input.style.borderColor = 'red';
        const label = input.parentElement;
        const formControl = label.parentElement;
        const sm = formControl.querySelector("small");
        sm.classList.add('viewable');
        checkLength(userName, 6, 20);
        checkLength(password, 8, 25);
        checkSame(password, passwordAgain);
    }
      else {
        input.style.borderColor = 'green';
        const label = input.parentElement;
        const formControl = label.parentElement;
        const sm = formControl.querySelector("small");
        sm.classList.remove('viewable');
    }
  });
}

function checkLength(input, min, max) {
  if(input.value.length < min) {
    const label = input.parentElement;
    const formControl = label.parentElement;
    const sm = formControl.querySelector("small");
    sm.classList.add('viewable');
    sm.innerText = `must be at least ${min} characters`;
    input.style.borderColor = 'red';
} else if (input. value.length > max) {
    const label = input.parentElement;
    const formControl = label.parentElement;
    const sm = formControl.querySelector("small");
    sm.classList.add('viewable');
    sm.innerText = `must be less than ${max} characters`;
    input.style.borderColor = 'red';
} else {
    input.style.borderColor = 'green';
    const label = input.parentElement;
    const formControl = label.parentElement;
    const sm = formControl.querySelector("small");
    sm.classList.remove('viewable');
  }
}

function checkSame (base, check) {
  if (base !== check) {
    const label = check.parentElement;
    const formControl = label.parentElement;
    const sm = formControl.querySelector("small");
    sm.classList.add('viewable');
    sm.innerText = "cannot confirm password";
    base.style.borderColor = 'red';
    check.style.borderColor = 'red';
} else if (base === check) {
    base.style.borderColor = 'green';
    check.style.borderColor = 'green';
    const label = check.parentElement;
    const formControl = label.parentElement;
    const sm = formControl.querySelector("small");
    sm.classList.remove('viewable');
} else {
    const label = check.parentElement;
    const formControl = label.parentElement;
    const sm = formControl.querySelector("small");
    sm.classList.remove('viewable');
    check.style.borderColor = "red";
}
}

function handleSubmit(event) {
  event.preventDefault();
  checkSame(password, passwordAgain);
  checkRequired([userName, mail, password, passwordAgain]);
}

function init() {
  validation.addEventListener('submit', handleSubmit);
}

init();