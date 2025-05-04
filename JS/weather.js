const API_KEY = "e745b4ae883cce9f886a26a24fe8c5f7"


function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`})
}

function onGeoError() {
    alert("can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
 