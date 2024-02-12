const apiKey = "c1003cb9d601a66b668bb42045f1b103";

async function getWeather(key, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
  const weatherJSON = await fetch(apiUrl);
  return weatherJSON.json()
}

function handleGetWeatherError(error) {
  console.log(error)
  document.querySelector(".temp").innerHTML = `Could not find the city provided`;
  
  document.querySelector(".forecast-text").innerHTML = "Forecast";
}

document.querySelector(".city-button").addEventListener("click", (_event) => {
  city = document.querySelector(".city-input").value;
  
  getWeather(apiKey, city).then((value) => {
    //If succesfully retrieved OpenWeather
    console.log(value);
    document.querySelector(".temp").innerHTML = Math.round(value.main.temp) + "°C";

    console.log(city)
    document.querySelector(".forecast-text").innerHTML = city + " Forecast"
  }).catch(handleGetWeatherError);
})