const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b512137a92df2e6909b0861d6839b12a';

console.log(apiURL);

fetch(apiURL)
    .then((response) =>response.json())
    .then((jsObject) =>) {

        let day = 0;
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        //reduce the list array to the five forecsts .... from 40
        //feed the filter a condition... 18:00:00 andgoogle sub
        includes 1800
        filter by so...filter it to only 1600 hours??
        let jsobject.list


        theFive.foreEach ( x=> )
        let d = newdate(x.dt_txt)''
        
        //loop through each of the forecast days
        let d = new Date(jsObject.list[4].dt_text);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;

        document.getElementById(`forecast${day+1}`)
    
    });
    