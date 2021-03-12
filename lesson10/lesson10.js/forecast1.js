const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

       // console.log(jsObject);    this was used to test the url and it is good
    //    let currenttemp = document.createElement('p');
       document.getElementById('current-temp').textContent = jsObject.main.temp;
       document.getElementById('temp-min').textContent = jsObject.main.temp_min;
       document.getElementById('temp-max').textContent = jsObject.main.temp_max;
       document.getElementById('current-humidity').textContent = jsObject.main.humidity;
       document.getElementById('wind-speed').textContent = jsObject.wind.speed;

    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    let window.temp = jsObject.main.temp; 
    let window.windspeed = jsObject.wind.speed;

  });