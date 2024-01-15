// const menuContainer = document.querySelector('.menu-container');

// menuContainer.addEventListener('click', function () {
//   this.classList.toggle('active');
// });


// login
let passwordInput = document.getElementById("passwordInput");
let submitButton = document.getElementById("submitButton");

passwordInput.addEventListener("change", function() {
   

    if (!validatePasswordStrength(passwordInput.value)) {
        alert("Your password must be at least ten digits long and contain upper and lower case letters");
    }
});

submitButton.addEventListener("click", function() {
    

    if (!validatePasswordStrength(passwordInput.value)) {
        alert("Your password must be at least ten digits long and contain upper and lower case letters");
    }
});

function validatePasswordLength(password) {
    return password.length >= 8;
}

function validatePasswordStrength(password) {
    let strengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
    return strengthRegex.test(password);
}

// login-email
let emailInput = document.getElementById("emailInput");


submitButton.addEventListener("click", function() {
    if (!validateEmail(emailInput.value)) {
        alert("Your email is not valid");
    }
});

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}











const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,3000,5000,6000,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// 

const HValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: HValues,
    datasets: [{ 
      data: [],
      borderColor: "red",
      fill: false
    }, { 
      data: [5000,6000,5500,5000,3000,4000,3300,2000,1900,1000],
      borderColor: "red",
      fill: false
    }, { 
      data: [],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
}); 


const RValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart3", {
  type: "line",
  data: {
    labels: RValues,
    datasets: [{ 
      data: [],
      borderColor: "red",
      fill: false
    }, { 
      data: [5000,6000,5500,5000,3000,4000,3300,2000,1900,1000],
      borderColor: "red",
      fill: false
    }, { 
      data: [],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
}); 

// 



const elts = {
text1: document.getElementById("text1"),
text2: document.getElementById("text2")
};

const texts = [

"The Power of Dreams",
"It must be love",
"do not give up",
"JAHANCAR",


];

const morphTime = .5;
const cooldownTime = 2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
morph -= cooldown;
cooldown = 0;

let fraction = morph / morphTime;

if (fraction > 1) {
cooldown = cooldownTime;
fraction = 1;
}

setMorph(fraction);
}

function setMorph(fraction) {
elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

fraction = 1 - fraction;
elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
morph = 0;

elts.text2.style.filter = "";
elts.text2.style.opacity = "100%";

elts.text1.style.filter = "";
elts.text1.style.opacity = "0%";
}

function animate() {
requestAnimationFrame(animate);

let newTime = new Date();
let shouldIncrementIndex = cooldown > 0;
let dt = (newTime - time) / 1000;
time = newTime;

cooldown -= dt;

if (cooldown <= 0) {
if (shouldIncrementIndex) {
    textIndex++;
}

doMorph();
} else {
doCooldown();
}
}

animate();
