const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {                                     
    threshold: 1,                                    //higher means slower loading time  
    rootMargin: "0px 0px 300px 0px"                //changes the margins 3rd val makes when loads
    };

const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));         //loads img and changes
        image.onload = () => {
            image.removeAttribute('data-src');
    
        };
    };

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });

    }, imgOptions);

imagesToLoad.forEach((img) => {
        observer.observe(img);
});
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
