const apiKey = "b3cf52970924613863eaaafd3c5b742c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); // Select the image to change it

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Check if the city name is invalid (404 error)
    if (response.status == 404) {
        alert("Invalid City Name");
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // OPTIONAL: Update image based on weather condition
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "weather-app-img/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "weather-app-img/images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "weather-app-img/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "weather-app-img/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "weather-app-img/images/mist.png";
        }

        document.querySelector(".weather").style.display="block"
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});