const API_KEY = "462df2cc509e7c79140ec08983197bea";

function onGeoSuccess(position)
{
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
    
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;

        // const temp = data.main.temp;
    });
}

function onGeoFail()
{
    alert("cannot find location");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoFail);
