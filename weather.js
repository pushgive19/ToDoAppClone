const 
townName = document.querySelector(".js-town"),
temperature = document.querySelector(".js-temp"),
mainLeft = document.querySelector(".main-left");

const api_key = "fd78063dd55b83f26b55f448fc30c9b1";

const LOCATION_LS = "location";

function successGetting(location){
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    const location_obj = {
        lat,lon
    };
    localStorage.setItem(LOCATION_LS,JSON.stringify(location_obj));
    paintWeather(lat,lon)
}

function climateIcon(iconNum){
    const iconImage = new Image();
    iconImage.src = `http://openweathermap.org/img/wn/${iconNum}@2x.png` ;
        mainLeft.appendChild(iconImage);
    }

function paintWeather(lat,lon){

    fetch(`
    https://api.openweathermap.org/data/2.5/weather?lat=${
        lat}&lon=${lon}&appid=${api_key}&units=metric`).then(function(response){
            return response.json();
        }).then(function(data){
            const temp=Math.floor(data.main.temp);
            const town = data.name// or sys[0]
            townName.textContent = `${town}.` 
            temperature.textContent = `${temp}°.`;
            const climate = climateIcon(data.weather[0].icon); //or weather[0]
            // const climate = '<img src="https://img.icons8.com/pastel-glyph/64/000000/partly-cloudy-day.png"/>'
        })
}
function errorGetting(){
    alert(`위치 접근을 허락하면 날씨를 볼 수 있어요`);
}

function getLocation(){
    navigator.geolocation.getCurrentPosition(successGetting, errorGetting);
}

function loadLocation(){
    const loadedLocation = JSON.parse(localStorage.getItem(LOCATION_LS));
    if(loadedLocation){
        paintWeather(loadedLocation.lat, loadedLocation.lon);
    }else{
        getLocation();
    }
}

function init(){
    loadLocation();
}
init();

