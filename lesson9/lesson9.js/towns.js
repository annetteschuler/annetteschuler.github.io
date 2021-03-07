const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)                 //feed the required agrument       
    .then(function (response) {    //returns a Promise
        return response.json();
    })
    .then(function (jsonObject) {   //to work with the converted response data in the js object format
        // console.table(jsonObject); //temporary checking for valid response and data parsing    
        const towns = jsonObject['towns'];     //store the results of the converted response into an array
        // for (let i = 0; i < towns.length; i++ ) {
        //  if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") { //filters to the 3 towns
        towns.forEach(town => {
            if (town.name == "Fish Haven" || town.name == "Preston" || town.name == "Soda Springs") {
      
        
        //creating html elements
let card = document.createElement('section');
let infodiv = document.createElement('div');
let div = document.createElement('div');
let h2 = document.createElement('h2');
let name = document.createElement('h2');
let motto = document.createElement('h3');
let year = document.createElement('p');
let population = document.createElement('p');
let rain = document.createElement('p');
let photo = document.createElement('img');


//adding content to each element, use template literals
div.setAttribute("class", `div`);
name.textContent = `${town.name}`;
motto.textContent = `${town.motto}`;
year.textContent = `Year Founded: ${town.yearFounded}`; 
population.textContent = `Population: ${town.currentPopulation}`; 
rain.textContent = `Annual Rain Fall: ${town.averageRainfall}"`;
photo.setAttribute("src", `images/${town.photo}`);
photo.setAttribute("alt", `Photo of ${town.name}`);


//add new elements to the page, you can just say append
card.append(infodiv);
card.append(h2);
infodiv.append(name);
infodiv.append(motto);
infodiv.append(year);
infodiv.append(population);
infodiv.append(rain);
card.append(photo);


//imagesToLoad
photo.setAttribute('src', 'images/'+ town.photo);
photo.setAttribute('alt', town.name + ' ' + town.order);


document.querySelector(".card").append(card);
         }
        });                     
} );  