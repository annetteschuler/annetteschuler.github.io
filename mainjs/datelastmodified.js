// date last modified
// var string = document.dateLastModified;

// alert(document.lastModified);
//returns: Tuesday, December 16, 2017 11:09:42

let lastModified = new Date(document.lastModified);

let copyrightYear = lastModified.getFullYear();

    document.getElementById('lastModified').textContent = lastModified;
    document.getElementById('copyrightYear').textContent = copyrightYear;