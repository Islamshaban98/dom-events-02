// Here you can access the colors variable
// have fun
const button = document.querySelector("button");
button.addEventListener("click", addColor);

function addColor() {
  const input = document.querySelector("input");
  const random = colors[Math.floor(Math.random() * colors.length)];
  const coloredDiv = document.querySelector("#pallete");
  coloredDiv.style.background = random;
  input.value = random;
  input.style.color = random;
  const h1 = document.querySelector("h1");
  h1.style.background = random;
  button.style.background = random;
  const text = document.querySelector("label");
  text.style.color = random;
}

const input = document.querySelector("input");
input.addEventListener("change", typeColor);

function typeColor(event) {
  const {value} = event.target;
  const coloredDiv = document.querySelector("#pallete");
  coloredDiv.style.background = value;
  input.style.color = value;
  const h1 = document.querySelector("h1");
  h1.style.background = value;
  button.style.background = value;
  const text = document.querySelector("label");
  text.style.color = value;
}
