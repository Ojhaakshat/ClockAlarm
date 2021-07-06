
const notif = document.getElementById("notification");
const temp = document.getElementById("temperature");
const desc = document.getElementById("description");
const loc = document.getElementById("location");
const icon = document.getElementById("image");
const key = "52b1659fc26409736c822ae679f958af";
let longitude;
let latitude;
window.addEventListener("load", () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            console.log(pos);
            longitude = pos.coords.longitude;
            latitude = pos.coords.latitude;
            console.log(longitude, latitude);
            getWeather(longitude, latitude);
        })   
    } else {
        notif.style.display = "block";
        notif.innerHTML = "Browser doesn't supports";
    }
})

// const weatherinfo = {};
function getWeather(longitude, latitude) {
    
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            temp.innerHTML = `${Math.floor(data.main.temp - 273)}°C`;
            // console.log(data.weather.description);
            desc.innerHTML = data.weather[0].description;
            loc.innerHTML = `${data.name}, ${data.sys.country}`;
            icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        })
}
