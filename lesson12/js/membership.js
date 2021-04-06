const requestURL = 'json/members.json';
fetch(requestURL)                 //feed the required agrument       
    .then(function (response) {    //returns a Promise
        return response.json();
    })
    .then(function (jsonObject) {   //to work with the converted response data in the js object format
         console.table(jsonObject);
         //temporary checking for valid response and data parsing    
        const members = jsonObject['members'];     //store the results of the converted response into an array
        for (let i = 0; i < members.length; i++) {  //loop through every record and process them into their own cards
    
        //creating html elements

// let card = document.createElement('section');
// let h2 = document.createElement('h2');
// let birthdate = document.createElement('p');
// let birthplace = document.createElement('p');
// let image = document.createElement('img');

let card = document.createElement('section');
let h2 = document.createElement('h2');
let name = document.createElement('p');
let address = document.createElement('p');
let phone = document.createElement('p');
let website = document.createElement('p');

//adding content to each element

h2.textContent = members[i].name;
address.textContent = members[i].address;
phone.textContent = members[i].phone;
website.textContent = members[i].website;

//add new elements to the page
card.append(h2);
card.append(name);
card.append(address);
card.append(phone);
card.append(website);

document.querySelector('div.members').append(card);
 };
} );  