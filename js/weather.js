const API_KEY = "5c7eb1f66a2670a084da8e5560feb140";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}°C ${data.weather[0].main} @`;
    });
}

function onGeoError() {
  alert("Can't get your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
