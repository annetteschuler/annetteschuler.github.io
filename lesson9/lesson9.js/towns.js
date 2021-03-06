const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)                 //feed the required agrument       
    .then(function (response) {    //returns a Promise
        return response.json();
    })
    .then(function (jsonObject) {   //to work with the converted response data in the js object format
        // console.table(jsonObject); //temporary checking for valid response and data parsing    
        const towns = jsonObject['towns'];     //store the results of the converted response into an array
        for (let x = 0; x < towns.length; x++ {
            if (towns[x].name == 'Fish Haven' || towns[x].name == 'Preston' || towns[x].name == 'Soda Springs') { //filters to the 3 towns
        
        //creating html elements
let card = document.createElement('section');
let h2 = document.createElement('h2');
let name = document.createElement('h2');
let motto = document.createElement('h3');
let year = document.createElement('p');
let population = document.createElement('p');
let rain = document.createElement('p');
let image = document.createElement('img');


//adding content to each element
name.textContent = town[x].name;
motto.textContent = towns[x].motto;
year.textContent = 'Year Founded: ' + towns[x].yearFounded; 
population.textContent = 'Population' + towns[x].currentPopulation; 
rain.textContent = 'Annual Rain Fall' + towns[x].averageRainfall + '"';
image.setAttribute('src', towns[x].photo);
image.setAttribute('alt', towns[x].name);


//add new elements to the page
card.appendChild(h2);
card.appendChild(name);
card.appendChild(motto);
card.appendChild(year);
card.appendChild(population);
card.appendChild(rain);
child.appendChild(image);

//imagesToLoad
photo.setAttribute('src, 'images/'+ towns[x].photo');
photo.setAttribute('alt', towns[x].name + ' ' + towns[x].order);


document.querySelector('div.cards').appendChild(card);
                 }         ;
} );  