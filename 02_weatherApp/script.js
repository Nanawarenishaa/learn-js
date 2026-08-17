document.addEventListener("DOMContentLoaded",() => {
   
    
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const cityTemperature = document.getElementById("city-temperature");
    const cityDescription = document.getElementById("city-description");
    const errorMsg = document.getElementById("error-msg");

   const API_KEY="8648605bddcf1867b6697e714d2e3dd6";

    getWeatherBtn.addEventListener("click", async () =>{
        console.log("btn clicked!!")
        const city = cityInput.value.trim();

        if(!city) return;
        try{
            const weatherData = await fetchWeatherData(city)
        displayWeather(weatherData)

        } catch(error){
              
   
            showError();
        }
        cityInput.value=""
    })

    async function fetchWeatherData(city){
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${API_KEY}`

        const response = await fetch(url);
        console.log(response)
        if(!response.ok){
            throw new Error("City not found")
        }
        const data = await response.json()
        console.log(data);
        
        return data
    }

   function displayWeather(data){
    const { name, main, weather } = data;

    cityName.textContent = name;
    cityTemperature.textContent = `${main.temp} °C`;
    cityDescription.textContent = weather[0].description;

    weatherInfo.classList.remove("hidden");
    errorMsg.classList.add("hidden");
}

    function showError(){
         console.log("Before:", weatherInfo.className);

    weatherInfo.classList.add("hidden");
    errorMsg.classList.remove("hidden");

    console.log("After:", weatherInfo.className);
    }




})