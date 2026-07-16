let today = new Date();
let year = today.getFullYear();
document.getElementById("currentYear").innerHTML = year;
document.getElementById("lastModified").innerHTML =
"Last Modified: " + document.lastModified;

const temperature = 9;
const windSpeed = 7;

function calculateWindChill(temp, speed){
  return(
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(speed,0.16) +
    0.3965 * temp * Math.pow(speed,0.16)
    ).toFixed(1);

}

if (temperature <= 10 && windSpeed > 4.48){
  document.getElementById("windChill").textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
}else{
  document.getElementById("windChill").textContent = "N/A";
}