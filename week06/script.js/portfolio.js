let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `lastModified:${document.lastModified}`;

const socialLinks = [
    {
        name: "GitHub",
        image: "images/github.svg",
        url: "https://github.com/bmtbmt23"
    },
     {
        name: "LinkedIn",
        image: "images/linkedin.svg",
        url: "https://www.linkedin.com/"
    },
      {
        name: "CodePen",
        image: "images/codepen.svg",
        url: "https://codepen.io/bmtbmt23"
    },
      {
        name: "Instagram",
        image: "images/instagram.svg",
        url: "https://www.instagram.com/becktargino_"
    },
      {
        name: "Facebook",
        image: "images/facebook.svg",
        url: "https://www.facebook.com/"
    },
];

const social = document.getElementById("social");
socialLinks.forEach(item => {
    social.innerHTML += `
    <a href="${item.url}" target="_blank rel="noopener noreferrer">
    <img src="${item.image}" alt="${item.name}" width="32"></a>` ;

});

const reference = [
  {
    name: "Colors",
    url: "https://coolors.co/?home",
  },
  {
    name: "Bro Code",
    url: "https://www.youtube.com/@BroCodez",
  },
  {
    name: "W3sSchools",
    url: "https://www.w3schools.com",
  },
  {
    name: "JavaScript.info",
    url: "https://javascript.info/"
  }  
];
function display(){
const list = document.getElementById("referenceList");
reference.forEach(site => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${site.url}" target="_blank"> ${site.name}</a>`;
  list.appendChild(li);
});
}
display();

const review = document.getElementById("review");
const review = document.getElementById("count");
review.addEventListener("input", function(){
                        count.textContent =`${review.value.length} characters`
                        });
                        
const form = document.getElementById("contactForm");
const message = document.getElementById("message");
form.addElementListener("submit", function (event){
                        event.preventDefault();
message.textContent = "Thank you!"
                        });