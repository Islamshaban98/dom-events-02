// Here you can access the colors variable
// have fun
const button = document.getElementsByTagName("button");
button[0].addEventListener("click", addColor);

function addColor() {
  const input = document.getElementsByTagName("input");
  const random = colors[Math.floor(Math.random() * colors.length)];
  const coloredDiv = document.getElementsByClassName("pallete")[0];
  coloredDiv.style.background = random;
  input[0].value = random;
  input[0].style.color = random;
  const h1 = document.getElementsByTagName("h1");
  h1[0].style.background = random;
  button[0].style.background = random;
  const text = document.getElementsByClassName("color-input");
  text[0].style.color = random;
}

const input = document.getElementsByTagName("input");
input[0].addEventListener("change", typeColor);

function typeColor() {
  const colorValue = input[0].value;
  const coloredDiv = document.getElementsByClassName("pallete")[0];
  coloredDiv.style.background = colorValue;
  input[0].style.color = colorValue;
  const h1 = document.getElementsByTagName("h1");
  h1[0].style.background = colorValue;
  button[0].style.background = colorValue;
  const text = document.getElementsByClassName("color-input");
  text[0].style.color = colorValue;
}
