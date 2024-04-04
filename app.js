const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");
const button = document.querySelector(".search-box button");
const input = document.querySelector(".search-box input");

async function responseData(city = "Moscow") {
  const link = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=f25c680c140d3e0e97c58cec933cb0d2`;
  //   try {
  const response = await fetch(link);
  // if (!response.ok) {
  //   throw new Error("Network response was not ok");
  // }

  const result = await response.json();
  //   } catch (error) {
  //     console.error("There has been a problem with your fetch operation:", error);
  //   }
  city.textContent = result.name;
  temperature.textContent = `${result.main.temp}`;
  humidity.textContent = `${result.main.humidity}%`;
  windspeed.textContent = `${result.wind.speed}km/h`;
  console.log(result);
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
