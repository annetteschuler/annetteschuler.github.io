const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)                 //feed the required agrument       
    .then(function (response) {    //returns a Promise
        return response.json();
    })
    .then(function (jsonObject) {   //to work with the converted response data in the js object format
        // console.table(jsonObject); //temporary checking for valid response and data parsing    
        const prophets = jsonObject['prophets'];     //store the results of the converted response into an array
        for (let i = 0; i < prophets.length; i++) {  //loop through every record and process them into their own cards
    
        //creating html elements

let card = document.createElement('section');
let h2 = document.createElement('h2');
let birthdate = document.createElement('p');
let birthplace = document.createElement('p');
let image = document.createElement('img');

//adding content to each element

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
image.setAttribute('src', prophets[i].imageurl);
image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

//add new elements to the page
card.appendChild(h2);
card.appendChild(birthdate);
card.appendChild(birthplace);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
 };
} );  