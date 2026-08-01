let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

let reviews = Number(localStorage.getItem("reviews")) || 0;
reviews ++;

localStorage.setItem("reviews", reviews);

document.getElementById("#reviewCount").textContent = `Number of reviews completed: ${reviews}`; 