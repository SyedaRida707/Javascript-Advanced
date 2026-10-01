let CityName = document.querySelector('.weather_city');
let dateTime = document.querySelector('.weather_date_time');
let forecast = document.querySelector('.weather_forecast');
let divIcon = document.querySelector('.weather_icon');
let temp = document.querySelector('.weather_temperature');
let min = document.querySelector('.weather_min');
let max = document.querySelector('.weather_max');
let tem1 = document.querySelector('.weather_feelsLike');
let tem2 = document.querySelector('.weather_humidity');
let tem3 = document.querySelector('.weather_wind');
let tem4 = document.querySelector('.weather_pressure');
let form = document.querySelector('.weather_search');

// 'fa6a8633cb7355f13a6855d1038ae647'
// https://api.openweathermap.org/data/2.5/weather?q=pakistan&APPID=fa6a8633cb7355f13a6855d1038ae647

// get the country name by internationalization js api
// to get country code and convert it English
const getCountryName = (code) => {
    return new Intl.DisplayNames(['en'], { type: "region" }).of(code);
}
// get the date & time name by internationalization js api
// to get the seconds and covert it into miliseconds create dateTime
const getDateTime = (seconds) => {
    let date = new Date(seconds * 1000);   // Convert seconds to milliseconds
    console.log(date);

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }
    return new Intl.DateTimeFormat("en-US", options).format(date);
}


let city = 'karachi';
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector('.city_name');;
    city = input.value;
    console.log(city);
    getFetchData();

    input.value = ''
});

const getFetchData = async () => {
    // const api = `httpss://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=fa6a8633cb7355f13a6855d1038ae647`;
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);

        const { weather, main, dt, sys, name, wind } = data;

        CityName.innerText = `${name}, ${getCountryName(sys.country)}`;
        dateTime.innerText = `${getDateTime(dt)}`;
        forecast.innerText = `${weather[0].main}`
        divIcon.innerHTML = `<img src='http://openweathermap.org/img/wn/${weather[0].icon}@4x.png'>`
        temp.innerHTML = `${main.temp}&#176`;
        min.innerHTML = `${main.temp_min.toFixed()}&#176`;
        max.innerHTML = `${main.temp_max.toFixed()}&#176`;
        tem1.innerHTML = `${main.feels_like.toFixed()}&#176`;
        tem2.innerHTML = `${main.humidity}%`;
        tem3.innerHTML = `${wind.speed}m/s`;
        tem4.innerHTML = `${main.pressure} hPa`;
    } catch {
        console.log('error');
    }
}

document.body.addEventListener('load', getFetchData());