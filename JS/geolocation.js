navigator.geolocation.getCurrentPosition(succeed, fail);
const API_KEY = '6615a8d76c03dffbd374a640a967bab6';

function succeed(position) {    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric
    `;
    // use 'fetch API'
    fetch(URL).then(function(response) {
        return response.json();
    })
    .then(function (data) {
        const name = data.name;
        const temp = data.main.temp;
        const feelsLike = data.main.feels_like;
        const weather = data.weather[0].main;
        console.log(name);
        console.log(temp);
        console.log(feelsLike);
        console.log(weather);
    })
}

function fail(){
    alert('Can\' get the location info');
}

function displayInfo() {
    
}