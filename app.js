const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");
const button = document.querySelector(".search-box button");
const input = document.querySelector(".search-box input");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

async function responseData(city = "Moscow") {
  const link = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f25c680c140d3e0e97c58cec933cb0d2`;

  const response = await fetch(link);
  if (response.status === 404) {
    error.style.display = "block";
    weather.style.display = "none";
  }
  const result = await response.json();
  console.log(result);
  weather.className = "actual-weather";
  cityName.textContent = result.name;
  temperature.textContent = `${result.main.temp}°C`;
  humidity.textContent = `${result.main.humidity}%`;
  windspeed.textContent = `${result.wind.speed}km/h`;

  weather.style.display = "block";
  error.style.display = "none";
}

const weatherCity = (event) => {
  event.preventDefault();
  if (input.value === "") {
    alert("Please enter a city name");
  }
  responseData(input.value);
  input.value = "";
};

button.addEventListener("click", weatherCity);
