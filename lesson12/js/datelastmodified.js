let lastModified = new Date(document.lastModified);

let copyrightYear = lastModified.getFullYear();

    document.getElementById('lastModified').textContent = lastModified;
    document.getElementById('copyrightYear').textContent = copyrightYear;