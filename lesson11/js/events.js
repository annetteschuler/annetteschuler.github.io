const apiURL3 = 'https://byui-cit230.github.io/weather/data/towndata.json';

console.table(apiURL3);

fetch(apiURL3)
  .then((response) =>response.json())
  .then((jsObject) =>{

    
             
           let townPreston = jsObject.towns.filter(town => town.name === "Preston");
           let events = townPreston[0].events;

           let list = document.createElement("ul");

           for (let i = 0; i < events.length; i++)  {
               let li = document.createElement("li");
               li.textContent = events[i]; 
    
               list.appendChild(li);    
           }

          let el = document.querySelector('#eventList');
          el.append(list); 

          } ) ;        