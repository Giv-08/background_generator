var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var copyButton = document.getElementById("copyButton");

//create function for gradient
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color1.value +
    ", " +
    color2.value +
    ", " +
    color3.value +
    ")";
  css.textContent = body.style.background + ";";
}
// create random color function
randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
// connect three inputs to random button
function newRandom() {
  color1.value = randomColor();
  color2.value = randomColor();
  color3.value = randomColor();
  setGradient();
}
//This code works too!
/*button.addEventListener("click", () => {
  color1.value = randomColor();
  color2.value = randomColor();
  color3.value = randomColor();
  setGradient();
});*/
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
button.addEventListener("click", newRandom);
