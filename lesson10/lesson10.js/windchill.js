// const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';


// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => { 


//     })
    
    
    function (wChill)) {

    // let temp = parseFloat(document.querySelector('#temp').textContent);
    let temp = jsObject.main.temp; 
    // let windspeed = parseFloat(document.querySelector('#windspeed').textContent);
    let windspeed = jsObject.wind.speed;
    
    let windChill='N/A';
    let x;
       
    if ((temp >50) || (windspeed <= 3)) {

        windChill = 'N/A';
         
    } else {   
        x = (35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windspeed, .16))) + 
        (0.4275 * temp * (Math.pow(windspeed, .16))));
        windChill = Math.round(x);
        
     }
    
        document.querySelector('#windchill').textContent=windChill;
 }
    
