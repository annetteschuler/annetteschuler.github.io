const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

       // console.log(jsObject);    this was used to test the url and it is good
    //    let currenttemp = document.createElement('p');
       document.getElementById('current-temp').textContent = jsObject.main.temp;
      

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });