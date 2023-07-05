const apiKey = 'df75e0ec25984a37fb7de9ff4849628d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';



const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather (city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    console.log(response)
    if(response.status === 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }else if (response.status === 400){
        document.querySelector('.error').style.display = 'block'

    }
    else 
    {
        let data = await response.json();
    
    console.log('ddddd',data.timezone);
    document.querySelector('.status').innerHTML = data.weather[0].main;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' °C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = Math.round(data.wind.speed) + 'km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "img/clouds.png"
    }
    else if (data.weather[0].main == 'Clear'){
        weatherIcon.src = "img/clear.png"

    }
    else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "img/drizzle.png"



    }
    else if (data.weather[0].main == 'Humidity'){
        weatherIcon.src = "img/humidity.png"

    }
    else if (data.weather[0].main == 'Mist'){
        weatherIcon.src = "img/mist.png"

    }
    else if (data.weather[0].main == 'Rain'){
        weatherIcon.src = "img/rain.png"

    }
    else if (data.weather[0].main == 'Wind'){
        weatherIcon.src = "img/wind.png"

    }
    else {
        weatherIcon.src = "img/snow.png"

    }
    console.log(data)
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none'
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?" +data.name + "')"



    }
    
}

searchBtn.addEventListener('click', () =>{
   checkWeather(searchBox.value);
})
