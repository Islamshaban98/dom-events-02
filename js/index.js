// Here you can access the colors variable
// have fun
const button =document.getElementsByTagName('button');
button[0].addEventListener('click', addColor);

function addColor(){
    const input = document.getElementsByTagName('input');
    const random = Math.floor(Math.random() * colors.length);
    const coloredDiv = document.getElementsByClassName('pallete')[0];
    coloredDiv.style.background = '#'+random;
    input[0].value = '#'+random;
}

const input = document.getElementsByTagName('input');
input[0].addEventListener('change',typeColor);

function typeColor(){
const colorValue = input[0].value;
const coloredDiv = document.getElementsByClassName('pallete')[0];
coloredDiv.style.background = colorValue;

}