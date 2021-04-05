const apiURL12b = 'https://api.openweathermap.org/data/2.5/onecall?lat=44.01637&lon=-92.47540&exclude=current,minutely,hourly,daily&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';
fetch(apiURL12b)
  .then((response) => response.json())
  .then((jsObject) => {
     

       // console.log(jsObject);    this was used to test the url and it is good

       const alerts = jsObject.alerts;
       if (typeof alerts !== 'undefined') {
            document.getElementById('alerts').textContent = alerts[0].description;
       }  else {
          document.getElementById(target).style.display = 'none';
       }
             
  });

 