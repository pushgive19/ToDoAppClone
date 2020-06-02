//wheather 이미지로 받아 올 수 있게 해보자.
const weather = document.querySelector(".js-weather");

const API_KEY = "fd78063dd55b83f26b55f448fc30c9b1";

const LOCATION_LS = "location";

let climate="";

function climateImg(text){
    if(text === "Clouds"){
        climate = '<i class="fas fa-cloud"></i>'
     }else if(text === "Rain"){
        climate ='<i class="fas fa-cloud-showers-heavy"></i>'
     }else if(text === "Snow"){
        climate='<i class="fas fa-snowflake"></i>'
    }else if(text === "Clear"){
        climate='<i class="fas fa-sun"></i>'
     }
    return climate;
}
function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json() ;}
    ).then(
        function(json){
            const temp = Math.floor(json.main.temp);
            const town = json.name;
            climate = json.weather[0].main;
            climateImg(climate);
            weather.innerHTML=`${climate}. ${temp}°. ${town}`;
        });
        
}
function saveLocation(data){
    localStorage.setItem(LOCATION_LS, data);
}

function succeseGeo(data){
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;
    const locationObj = {
        lat, lon
    };
    saveLocation(JSON.stringify(locationObj));
    getWeather(lat,lon);
    
    // console.log(climate, temp, town); // <<출력 안돼 왜? 비동기 때문에 먼저 실행되는것.
}

function errorGeo(data){
    alert('fail to load your location');
}
function loadCoord(){
    const currentLocation = localStorage.getItem(LOCATION_LS);
    if(currentLocation === null){
        navigator.geolocation.getCurrentPosition(succeseGeo, errorGeo);
    }else{
        const currentLocationParsed = JSON.parse(currentLocation)
        getWeather(currentLocationParsed.lat, currentLocationParsed.lon);
    }
}
function init(){
    loadCoord();
}
init();
