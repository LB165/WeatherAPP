let now = new Date();

function formatDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let currentDay = days[date.getDay()];
  let formattedDay = `${currentDay}`;
  return formattedDay;
}
let hour = now.getHours();
let minutes = now.getMinutes();

let currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `${formatDay(now)} ${hour}:${minutes}`;

//
function locationChosen(event) {
  event.preventDefault();
  let locationInput = document.querySelector("#location-input");
  let h2 = document.querySelector("h3");
  h2.innerHTML = `${locationInput.value}`;
  if (locationInput.value === 0) h2.innerHTML = "Please search for a city";
}
let locationForm = document.querySelector("#location-form");
locationForm.addEventListener("submit", locationChosen);

//
function convertC(event) {
  event.preventDefault();
  let temperature = document.querySelector(".weatherNow");
  temperature.innerHTML = 6;
}
function convertF(event) {
  event.preventDefault();
  let temperature = document.querySelector(".weatherNow");
  temperature.innerHTML = 43;
}

let cUnit = document.querySelector("#cTemp");
cUnit.addEventListener("click", convertC);

let fUnit = document.querySelector("#fTemp");
fUnit.addEventListener("click", convertF);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#weatherNow");
  currentTemp.innerHTML = `${temperature}`;
}

function showSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#location-input");
  let currentCity = document.querySelector("#cityLocation");
  currentCity.innerHTML = `${searchInput.value}`;
  let apiKey = "09b62f5636602cc015e9862bc2ce7fa3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#location-form");
form.addEventListener("submit", showSearch);
