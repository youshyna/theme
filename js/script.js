let switchButton = document.querySelector('.switch-btn');
let screen = document.querySelector('.screen');
switchButton.onclick = function () {
  console.log("Кнопка нажата!");
  switchButton.classList.toggle('switch-on');
  screen.classList.toggle("screen--dark-theme");
}
