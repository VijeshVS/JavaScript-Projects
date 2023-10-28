const apiKey = "4c709575cc3f8c1fd893a08081fb17e2";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city){
    console.log('api called')
    const response = await fetch(apiUrl + `&q=${city}`+ `&appid=${apiKey}`);
    console.log(response.status)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = none;
        
    }else{
        weather_div.style.display = "block";
        console.log(response)
        var data = await response.json();
        console.log(data)
        const weather_icon = document.querySelector('.weather-icon')
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr";
    
        if(data.weather[0].main == "Clouds"){
            weather_icon.src = "images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weather_icon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            weather_icon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weather_icon.src = "images/mist.png"
        }
    }

}


let search_button = document.querySelector('#search')
let input_box = document.querySelector('#in')

weather_div = document.querySelector('.weather')

search_button.addEventListener('click',()=>{  
    checkWeather(input_box.value)
})

