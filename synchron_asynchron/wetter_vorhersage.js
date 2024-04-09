function fetchweather(city) {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const weatherData = {
                "Berlin": 20,
                "Paris": 25,
                "Madrid": 26,
                "London": 18,
            };
        if(weatherData[city]) {
           resolve('Die aktuelle Temperatur in ${city} ist ${weatherData[city]} Grad.')
        } else {
            reject("Daten fuer diese Stadt fehlen.")
        }
        },200);
        });
}
async function showWeather(city) {
    const message =await fetchweather(city);
    console.log(message);
}
showWeather("Berlin");
showWeather("Paris");
showWeather("New York");