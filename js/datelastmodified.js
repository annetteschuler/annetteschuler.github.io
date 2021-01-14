// date last modified
var string = document.lastModified;

alert(document.lastModified);
//returns: Tuesday, December 16, 2017 11:09:42

let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

    document.getElementById('lastModified').textContent = lastModified;