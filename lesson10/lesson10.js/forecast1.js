const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
     

       // console.log(jsObject);    this was used to test the url and it is good

       const temp = Number(jsObject.main.temp);
       const windspeed = Number(jsObject.wind.speed);
       const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
      
    
       //    let currenttemp = document.createElement('p');
       document.getElementById('current-temp').textContent = jsObject.main.temp;
       document.getElementById('temp-min').textContent = jsObject.main.temp_min;
       document.getElementById('temp-max').textContent = jsObject.main.temp_max;
       document.getElementById('current-humidity').textContent = jsObject.main.humidity;
       document.getElementById('wind-speed').textContent = jsObject.wind.speed;

       let windChill='N/A';
       let x;
          
       if ((temp >50) || (windspeed <= 3)) {
   
           windChill = 'N/A';

         }  else {   
            x = (35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windspeed, .16))) + 
            (0.4275 * temp * (Math.pow(windspeed, .16))))
            windChill = Math.round(x);
           }

        document.querySelector('#windchill').textContent=windChill;
  });

