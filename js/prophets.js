const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)                 //feed the required agrument       
    .then(function (response {    //returns a Promise
        return response.json();
    })
    .then(function (jsonObject) {   //to work with the converted response data in the js object format
        console.table(jsonObject); //temporary checking for valid response and data parsing    
        for (let i = 0; i < prophets.length; i++) {  //loop through every record and process them into their own cards
     }
    } )    
    );

    const prophets = jsonObject['prophets'];    //store the results of the converted response into an array
let card = document.createElement('section');
let h2 = document.createElement('h2');

h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

card.appendChild(h2);
docuement.querySelector('div.cards').appendChild(card);

image.setAttribute('src', prophets[i].imageurl);

   