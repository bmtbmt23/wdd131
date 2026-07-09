let today = new Date();
let year = today.getFullYear();
document.getElementById("currentyear").innerHTML = year;
document.getElementById("lastModified").innerHTML =
"Last Modified: " + document.lastModified;

const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('nav');

MenuButton.addEventListener('click', ()=> {
  navMenu.classList.toggle('open');
  menuButton.classlist.toggle('open');
});