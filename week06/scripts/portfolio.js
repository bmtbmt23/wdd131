let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified:${document.lastModified}`;

const socialLinks = [
    {
        name: "GitHub",
        image: "images/github.png",
        url: "https://github.com/bmtbmt23"
    },
     {
        name: "LinkedIn",
        image: "images/linkedin.jpeg",
        url: "https://www.linkedin.com/"
    },
      {
        name: "CodePen",
        image: "images/codepen.png",
        url: "https://codepen.io/bmtbmt23"
    },
      {
        name: "Instagram",
        image: "images/instagram.jpeg",
        url: "https://www.instagram.com/becktargino_"
    },
      {
        name: "Facebook",
        image: "images/facebook.png",
        url: "https://www.facebook.com/"
    },
];

const social = document.getElementById("social");

if (social) {
socialLinks.forEach(item => {
    social.innerHTML += `
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">
    <img src="${item.image}" alt="${item.name}" width="32"></a>`;

});
}

const reference = [
  {
    name: "Colors",
    url: "https://coolors.co/?home"
  },
  {
    name: "Bro Code",
    url: "https://www.youtube.com/@BroCodez"
  },
  {
    name: "W3sSchools",
    url: "https://www.w3schools.com"
  },
  {
    name: "JavaScript.info",
    url: "https://javascript.info/"
  }  
];

function display(){
const list = document.getElementById("referenceList");

if (list) {
reference.forEach(site => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${site.url}" target="_blank"> ${site.name}</a>`;
  list.appendChild(li);
});
}
}

display();

const review = document.getElementById("review");
const count = document.getElementById("count");

if(review && count){
review.addEventListener("input", function(){
                        count.textContent =`${review.value.length} characters`;

 });
}
                        
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

if (form && message){
form.addElementListener("submit", function (event){
                        event.preventDefault();
message.textContent = "Thank you!"
 });
}