let allbody = document.getElementsByTagName("body");
let numberOfMeteors1 = Math.floor(Math.random() * (20 - 10)) + 100;

function buildSpace() {
    building = setInterval(createMeteor1, 200);
    building2 = setInterval(createMeteor2, 800);
    building3 = setInterval(createMeteor3, 1500);
}

function createMeteor1() {
    let positionx = Math.floor(Math.random() * (100 - 1)) + 1;
    let meteorDelay = Math.floor(Math.random() * (positionx - 1)) + 1;
    let meteor = document.createElement("div");
    meteor.classList.add('meteor');
    meteor.style.left = `${positionx - 1}vw`;
    meteor.style.animationDelay = `${meteorDelay}00ms`;

    document.body.appendChild(meteor);
}

function createMeteor2() {
    let positionx = Math.floor(Math.random() * (100 - 1)) + 1;
    let meteorDelay = Math.floor(Math.random() * (positionx - 1)) + 1;
    let meteor = document.createElement("div");
    meteor.classList.add('meteor2');
    meteor.style.left = `${positionx - 1}vw`;
    meteor.style.animationDelay = `${meteorDelay}00ms`;
    document.body.appendChild(meteor);
}

function createMeteor3() {
    let positionx = Math.floor(Math.random() * (100 - 1)) + 1;
    let meteorDelay = Math.floor(Math.random() * (positionx - 1)) + 1;
    let meteor = document.createElement("div");
    meteor.classList.add('meteor3');
    meteor.style.left = `${positionx - 1}vw`;
    meteor.style.animationDelay = `${meteorDelay}00ms`;
    document.body.appendChild(meteor);
}

for (let i=0; i<=1; i++) {
    buildSpace();
};

console.log("jou");