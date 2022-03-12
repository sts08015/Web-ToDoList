const API_KEY = "fa52788f46f399209508e17ce726438f"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(api).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} `;
    });
}

function onGeoErr() {
    alert("Location Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);