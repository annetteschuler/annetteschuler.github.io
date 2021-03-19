const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';
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

  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';

  console.log(apiURL2);
  
  fetch(apiURL2)
      .then((response) =>response.json())
      .then((jsObject) => {
  
     
          let d = 0;
          let date = new Date();
          let currentday = date.getDay();
          
  
          const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
               //  document.getElementById(`dayofweek${d+1}`).textContent = dayofWeek[d.getDay()];
          // document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
           document.querySelector('#dayofweek1').textContent = dayOfWeek[currentday];
           document.querySelector('#dayofweek2').textContent = dayOfWeek[currentday + 1];
           document.querySelector('#dayofweek3').textContent = dayOfWeek[currentday + 2];
           document.querySelector('#dayofweek4').textContent = dayOfWeek[currentday + 3];
           document.querySelector('#dayofweek5').textContent = dayOfWeek[currentday + 4];
      
      
          //reduce the list array to the five forecasts .... from 40
          //feed the filter a condition... 18:00:00 andgoogle sub
          // build an array that includes only the 1800
  
  
           const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));  //filter 1800       
           let i = 0;
           forecast.forEach(x => {
  
              let imagesrc = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png'; 
              let desc = x.weather[0].description;
  
              // document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
              document.getElementById(`icon${i + 1}`).setAttribute('src', imagesrc);  // get icon
              document.getElementById(`icon${i + 1}`).setAttribute('alt', desc);      //get alt
              document.getElementById(`forecast${i + 1}`).textContent = Math.round(x.main.temp); //get temp
  
              i++;
           });  
  
            
      
      });
        