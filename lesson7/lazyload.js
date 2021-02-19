const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {                                     
    threshold: 0,                                    //higher means slower loading time  
    rootMargin: "0px 0px 50px 0px"                //changes the margins 3rd val makes when loads
    };

const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
            image.removeAttribute("data-src");
    
        };
    };

if("IntersectionObserver" in Window) {
    const observer = new IntersectionalObserver((items, imgObserver) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                img.Observer.unobserve(item.target);
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
