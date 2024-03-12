function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let h1 = document.querySelector("#current-city");
  h1.innerHTML = cityInput.value;

  let city = cityInput.value;
  let apiKey = "fdtba1b75abd823874fca8d73007o460";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let temperatureElement = document.querySelector("#current-temperature-value");
  temperatureElement.innerHTML = `${temperature}`;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = `${city}`;
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", search);

function formatDate(date) {
  let day = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayNow = days[day];
  return `${dayNow} ${hour}:${minute}`;
}

let currentTime = document.querySelector("#current-time");
let now = new Date();

currentTime.innerHTML = formatDate(now);
