let d = new Date();

document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()} Bruna Beck`;
document.querySelector(`#lastModified`).textContent = `lastModified:${document.lastModified}`;

const select = documet.querySelector("#product");
products.forEach(product =>{
  const option = document.createElement("option");
 
  option.value = producti.id;
  option.textContent = product.name;
  select.appendChild(option);
});