function wChill() {
    let temp = parseFloat(document.querySelector('#temp').textContent);
    let windspeed = parseFloat(document.querySelector('#windspeed').textContent);
    
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
    
