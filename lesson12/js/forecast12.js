const apiURL12 = 'https://api.openweathermap.org/data/2.5/onecall?lat=44.01637&lon=-92.47540&exclude=minutely,hourly,daily,alerts&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';
fetch(apiURL12)
  .then((response) => response.json())
  .then((jsObject) => {
     

       // console.log(jsObject);    this was used to test the url and it is good

       const temp1 = Number(jsObject.current.temp);
       const temp = Math.round(temp1);
       const description = jsObject.current.weather[0].description;
       const humidity = Number(jsObject.current.humidity);
      
    
       //    let currenttemp = document.createElement('p');
       document.getElementById('current-temp').textContent = temp;
       document.getElementById('current-description').textContent = description;
       document.getElementById('current-humidity').textContent = humidity;
     

       
  });

 const apiURL12a = 'https://api.openweathermap.org/data/2.5/onecall?lat=44.01637&lon=-92.47540&exclude=current,minutely,hourly,alerts&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';

   console.log(apiURL12a);
  
   fetch(apiURL12a)
       .then((response) =>response.json())
       .then((jsObject) => {
  
     
           let d = 0;
           let date = new Date();
           let currentday = date.getDay();
          
  
           const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
                //  document.getElementById(`dayofweek${d+1}`).textContent = dayofWeek[d.getDay()];
           // document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
            document.querySelector('#dayofweek1').textContent = dayOfWeek[currentday];
            document.querySelector('#dayofweek2').textContent = dayOfWeek[currentday + 1];
            document.querySelector('#dayofweek3').textContent = dayOfWeek[currentday + 2];
          
      
      
           //reduce the list array to the five forecasts .... from 40
           //feed the filter a condition... 18:00:00 andgoogle sub
           // build an array that includes only the 1800
  
  
            // const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));  //filter 1800       
            const forecast0Number = Number(jsObject.daily[0].temp.max);  //filter 1800 
            const forecast0 = Math.round(forecast0Number);   
            const forecast1Number = Number(jsObject.daily[1].temp.max);
            const forecast1 = Math.round(forecast1Number);
            const forecast2Number = Number(jsObject.daily[2].temp.max);
            const forecast2 = Math.round(forecast2Number);

            
//   const temp1 = Number(jsObject.current.temp);             
//   const temp = Math.round(temp1);

               document.getElementById(`forecast1`).textContent = forecast0;
               document.getElementById(`forecast2`).textContent = forecast1;
               document.getElementById(`forecast3`).textContent = forecast2;
       
      
       });
        