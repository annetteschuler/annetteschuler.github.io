const apiURL3 = 'https://byui-cit230.github.io/weather/data/towndata.json';

// console.table(apiURL3);

fetch(apiURL3)
  .then((response) =>response.json())
  .then((jsObject) =>{

    
        
        let currentURL = document.URL;
        let currentTown;

        if (currentURL.includes('preston')) {
            currentTown = "Preston";
        } else if (currentURL.includes('fishhaven')) {
            currentTown = "Fish Haven";
        } else if (currentURL.includes('sodasprings')) {
            currentTown = "Soda Springs";
        } 
             
        let town = jsObject.towns.filter(town => town.name === currentTown);

           let events = town[0].events;
            
           let list = document.createElement("ul");

           for (let i = 0; i < events.length; i++)  {
               let li = document.createElement("li");
               li.textContent = events[i]; 
    
               list.appendChild(li);    
           }

          let el = document.querySelector('#eventList');
          el.append(list); 

          } ) ;        