
const notif = document.getElementById("notification");
const temp = document.getElementById("temperature");
const desc = document.getElementById("description");
const loc = document.getElementById("location");
const icon = document.getElementById("image");
const date = document.getElementById("date");
const pres = document.getElementById("pressure");
const humid = document.getElementById("humidity");

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

const temperature = {

};
function getDate (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
function getWeather(longitude, latitude) {
    
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            temperature.value = `${Math.floor(data.main.temp - 273)}`;
            temperature.unit = "celsius";
            temp.innerHTML = `${temperature.value}°<span>C</span>`;
            // console.log(data.weather.description);
            desc.innerHTML = data.weather[0].description;
            loc.innerHTML = `${data.name}, ${data.sys.country}`;
            icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            humid.innerHTML = `${data.main.humidity}%`;
            pres.innerHTML = `${data.main.pressure}mbar`;
            const now = new Date();
            date.innerHTML = getDate(now);
        })
}

// C to F conversion
function celsiusToFahrenheit(val){
    return ( val * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
temp.addEventListener("click", function(){
    if(temperature.value === undefined) return;
    
    if(temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        temp.innerHTML = `${fahrenheit}°<span>F</span>`;
        temperature.unit = "fahrenheit";
    }else{
        temp.innerHTML = `${temperature.value}°<span>C</span>`;
        temperature.unit = "celsius";
    }
});