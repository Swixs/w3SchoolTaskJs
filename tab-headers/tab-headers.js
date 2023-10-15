const background = document.getElementById('header-background');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

const firstBtn = document.getElementById('firstBtn')
const secondBtn = document.getElementById('secondBtn')
const thirdBtn = document.getElementById('thirdBtn')
const fourthBtn = document.getElementById('fourthBtn')

const index = false;

firstBtn.addEventListener('click', () => {
    if (index) {
        index = false;
    }
    else {
        background.style.backgroundColor = 'red'
        secondBtn.style.backgroundColor = 'white'
        title.innerText = 'London'
        firstBtn.style.backgroundColor = 'red'
        subtitle.innerText = 'London is the capital city of England.'
        firstBtn.style.color = 'white'
        secondBtn.style.color = 'black'
        thirdBtn.style.backgroundColor = 'white'
        thirdBtn.style.color = 'black'
        fourthBtn.style.backgroundColor = 'white'
        fourthBtn.style.color = 'black'
        index = true;
    }
})

secondBtn.addEventListener('click', () => {
    if (index) {
        index = false;
    }
    else {
        firstBtn.style.backgroundColor = 'white'
        secondBtn.style.backgroundColor = 'green'
        background.style.backgroundColor = 'green'
        subtitle.innerText = 'Paris is the capital of France.'
        firstBtn.style.color = 'black'
        secondBtn.style.color = 'white'
        title.innerText = 'Paris'
        thirdBtn.style.backgroundColor = 'white'
        thirdBtn.style.color = 'black'
        fourthBtn.style.backgroundColor = 'white'
        fourthBtn.style.color = 'black'
        index = true;
    }
})

thirdBtn.addEventListener('click', () => {
    if (index) {
        index = false;
    }
    else {
        firstBtn.style.backgroundColor = 'white'
        secondBtn.style.backgroundColor = 'green'
        background.style.backgroundColor = 'blue'
        subtitle.innerText = 'Tokyo is the capital of Japan.'
        firstBtn.style.color = 'black'
        title.innerText = 'Tokyo'
        secondBtn.style.color = 'black'
        secondBtn.style.backgroundColor = 'white'
        thirdBtn.style.backgroundColor = 'blue'
        thirdBtn.style.color = 'white'
        fourthBtn.style.backgroundColor = 'white'
        fourthBtn.style.color = 'black'
        index = true;
    }
})

fourthBtn.addEventListener('click', () => {
    if (index) {
        index = false;
    }
    else {
        firstBtn.style.backgroundColor = 'white'
        secondBtn.style.backgroundColor = 'green'
        background.style.backgroundColor = 'rgb(253, 106, 0)'
        subtitle.innerText = 'Oslo is the capital of Norway.'
        firstBtn.style.color = 'black'
        title.innerText = 'Oslo'
        secondBtn.style.color = 'black'
        secondBtn.style.backgroundColor = 'white'
        thirdBtn.style.backgroundColor = 'white'
        thirdBtn.style.color = 'black'
        fourthBtn.style.color = 'white'
        fourthBtn.style.backgroundColor = 'rgb(253, 106, 0)'
        index = true;
    }
})