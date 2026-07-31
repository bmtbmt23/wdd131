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

conts product = [
  {
  id:"PT-1988";
  name:"AI Productivity Tools";
},
{
conts product =
  id:"PT-1987";
  name:"Mini Desktop Robots";
},
{
  id:"PT-1980";
  name:"Mobile Gaming";
  },
{
  id:"PT-1983";
},
 {
  id:"PT-2018";
  name:"Wearables"
 },
  {
  id:"PT-2008";
  name:"Computer";
  }
];