let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector(`#lastModified`).textContent = `last Modified: ${document.lastModified}`;

const hambutton = document.querySelector("#hambutton");
const navmenu = document.querySelector("#navmenu");
hambutton.addEventListener('click', () => {
navmenu.classList.toggle("open");
hambutton.classList.toggle("open");
});

function toggleActive(element){
  const navLinks = document.querySelectorAll("#navmenu a");
  navLinks.forEach(link => {
    link.classList.remove("active");
  });
  element.classList.add("active");
}
  const navLinks = document.querySelectorAll("#navmenu a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (){
     
    toggleActive(this);
});
});

const temples = [
{
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

{
   templeName: "Recife Brazil",
   location: "Recife, Pernambuco, Brazil",
   dedicated: "1995, January, 13",
   area: 37200,
   imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
},
{
   templeName: "Maceio Brazil",
   location: "Maceio, Brazil",
   dedicated: "2022, April, 3",
   area:19000,
   imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/maceio-brazil-temple/maceio-brazil-temple-48800-main.jpg"
},
{
   templeName: "Joao Pessoa Brazil",
   location: "Joao Pessoa, Brazil",
   dedicated: "2023, October, 1",
   area:18850,
   imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/joao-pessoa-brazil-temple/joao-pessoa-brazil-temple-50370-main.jpg"
}
];
 const mainTitle = document.querySelector("#title");
 const container = document.querySelector(".res-grid");
                                                         
function CreateTempleCards(filteredTemples){
container.innerHTML = " ";

filteredTemples.forEach(temple => {

const card = document.createElement("section");
const name = document.createElement("h3");
const location = document.createElement("p");
const dedication = document.createElement("p");
const area = document.createElement("p");
const img = document.createElement("img");

name.textContent = temple.templeName;

location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
 
img.setAttribute("src", temple.imageUrl);
img.setAttribute("alt", `${temple.templeName} Temple`);
img.setAttribute("loading", "lazy");
img.setAttribute("width", "400");
img.setAttribute("height", "250");

card.appendChild(name);
card.appendChild(location);
card.appendChild(dedication);
card.appendChild(area);
card.appendChild(img);
 
container.appendChild(card);
});
  }
document.querySelector("#home").addEventListener("click", () => {
  hambutton.textContent = "Home";
  CreateTempleCards(temples);
});
document.querySelector("#old").addEventListener("click", () => {
   hambutton.textContent = "#Old";
   const oldTemples = temples.filter(temple => {
         const year = Number(temple.dedicated.slice(0, 4));
return year < 1900;
     });
CreateTempleCards(oldTemples);
   });
document.querySelector("#new").addEventListener("click", () =>{
  hambutton.textContent = "New";
  const newTemples = temples.filter(temple => {
const year = Number(temple.dedicated.slice(0, 4));
    return year > 2000;
  });
  CreateTempleCards(newTemples);
});
document.querySelector("#large").addEventListener("click", () =>{
  hambutton.textContent = "Large";
  const largeTemples = temples.filter(temple => {
   return temple.area > 90000;
  });
  CreateTempleCards(largeTemples);
});
document.querySelector("#small").addEventListener("click", () =>{
hambutton.textContent = "small";
  const smallTemples = temples.filter(temple => {
    return temple.area < 10000;
  });
  CreateTempleCards(smallTemples);
});

CreateTempleCards(temples);