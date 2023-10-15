const background = document.getElementById('background');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const contatore = document.getElementById('contatore');
const txt = document.getElementById('txt');
const rotated = false;

const background2 = document.getElementById('background2');
const leftArrow2 = document.getElementById('left-arrow2');
const rightArrow2 = document.getElementById('right-arrow2');
const contatore2 = document.getElementById('contatore2');
const txt2 = document.getElementById('txt2');

const background3 = document.getElementById('background3');
const leftArrow3 = document.getElementById('left-arrow3');
const rightArrow3 = document.getElementById('right-arrow3');
const contatore3 = document.getElementById('contatore3');
const txt3 = document.getElementById('txt3');

const background4 = document.getElementById('background4');
const leftArrow4 = document.getElementById('left-arrow4');
const rightArrow4 = document.getElementById('right-arrow4');
const contatore4 = document.getElementById('contatore4');
const txt4 = document.getElementById('txt4');

rightArrow.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background2.style.backgroundImage = 'url("./img/img_snow_wide.jpg")'
        background2.style.height = '350px'
        contatore2.style.fontSize = '20px'
        leftArrow2.style.fontSize = '20px'
        rightArrow2.style.fontSize = '20px'
        txt2.style.fontSize = '20px'
        background.style.height = '0px'
        background.style.marginTop = '0px'
        contatore.style.fontSize = '0px'
        leftArrow.style.fontSize = '0px'
        rightArrow.style.fontSize = '0px'
        txt.style.fontSize = '0px'
        rotated = true
    }
})
leftArrow.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background4.style.backgroundImage = 'url("./img/img_mountains_wide.jpg")';
        background4.style.height = '350px'
        contatore4.style.fontSize = '20px'
        leftArrow4.style.fontSize = '20px'
        rightArrow4.style.fontSize = '20px'
        txt4.style.fontSize = '20px'
        background.style.height = '0px'
        background.style.marginTop = '0px';
        contatore.style.fontSize = '0px'
        leftArrow.style.fontSize = '0px'
        rightArrow.style.fontSize = '0px'
        txt.style.fontSize = '0px'
        rotated = true
    }
})
rightArrow2.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background3.style.backgroundImage = 'url("./img/img_lights_wide.jpg")'
        background3.style.height = '350px';
        contatore3.style.fontSize = '20px';
        leftArrow3.style.fontSize = '20px';
        rightArrow3.style.fontSize = '20px';
        txt3.style.fontSize = '20px';
        background2.style.height = '0px'
        background2.style.marginTop = '0px';
        contatore2.style.fontSize = '0px'
        leftArrow2.style.fontSize = '0px'
        rightArrow2.style.fontSize = '0px'
        txt2.style.fontSize = '0px'
        rotated = true;
    }
})

leftArrow2.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background.style.backgroundImage = 'url("./img/img_nature_wide.jpg")'
        background.style.height = '350px'
        contatore.style.fontSize = '20px'
        leftArrow.style.fontSize = '20px'
        rightArrow.style.fontSize = '20px'
        txt.style.fontSize = '20px'
        background2.style.height = '0px'
        background2.style.marginTop = '0px';
        contatore2.style.fontSize = '0px'
        leftArrow2.style.fontSize = '0px'
        rightArrow2.style.fontSize = '0px'
        txt2.style.fontSize = '0px'
        rotated = true
    }
})

rightArrow3.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background4.style.backgroundImage = 'url("./img/img_mountains_wide.jpg")'
        background4.style.height = '350px';
        contatore4.style.fontSize = '20px';
        leftArrow4.style.fontSize = '20px';
        rightArrow4.style.fontSize = '20px';
        txt4.style.fontSize = '20px';
        background3.style.height = '0px'
        background3.style.marginTop = '0px';
        contatore3.style.fontSize = '0px'
        leftArrow3.style.fontSize = '0px'
        rightArrow3.style.fontSize = '0px'
        txt3.style.fontSize = '0px'
        rotated = true;
    }
})

leftArrow3.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background2.style.backgroundImage = 'url("./img/img_snow_wide.jpg")'
        background2.style.height = '350px'
        contatore2.style.fontSize = '20px'
        leftArrow2.style.fontSize = '20px'
        rightArrow2.style.fontSize = '20px'
        txt2.style.fontSize = '20px'
        background3.style.height = '0px'
        background3.style.marginTop = '0px';
        contatore3.style.fontSize = '0px'
        leftArrow3.style.fontSize = '0px'
        rightArrow3.style.fontSize = '0px'
        txt3.style.fontSize = '0px'
        rotated = true
    }
})

rightArrow4.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background.style.backgroundImage = 'url("./img/img_nature_wide.jpg")'
        background.style.height = '350px';
        contatore.style.fontSize = '20px';
        leftArrow.style.fontSize = '20px';
        rightArrow.style.fontSize = '20px';
        txt.style.fontSize = '20px'
        background4.style.height = '0px'
        background4.style.marginTop = '0px';
        contatore4.style.fontSize = '0px'
        leftArrow4.style.fontSize = '0px'
        rightArrow4.style.fontSize = '0px'
        txt4.style.fontSize = '0px'
        rotated = true
    }
})

leftArrow4.addEventListener('click', () => {
    if (rotated) {
        rotated = false
    } else {
        background3.style.backgroundImage = 'url("./img/img_lights_wide.jpg")'
        background3.style.height = '350px'
        contatore3.style.fontSize = '20px'
        leftArrow3.style.fontSize = '20px'
        rightArrow3.style.fontSize = '20px'
        txt3.style.fontSize = '20px'
        background4.style.height = '0px'
        background4.style.marginTop = '0px';
        contatore4.style.fontSize = '0px'
        leftArrow4.style.fontSize = '0px'
        rightArrow4.style.fontSize = '0px'
        txt4.style.fontSize = '0px'
        rotated = true
    }
})