// Kevin Powell created this 

const images = document.querySelectorAll("[data-src]");

function preloadingImage(img) {                       //function to search img
    const src = img.getAttribute("data-src");        //finds data-src
    if (!src) {                                      //if no data there
        return;                                     
    }
    img.src = src;                                 //this applies actual img source from
}

const imgOptions = {                                     
    threshold: 0,                                    //higher means slower loading time  
    rootMargin: "0px 0px 50px 0px"                //changes the margins 3rd val makes when loads
    };

const imgObserver = new IntersectionObserver((entries.imgObserver)=>){
    entries.forEach(entry=> {
        if (!entry.isIntersecting) {                 //if this is false return
        return;
         } else   {
    preloadimage(entry.target);                     //load preloadimage
    imgObserver.unobserve(entry.target);}           //stop observing it
    })
}, imgOptions);

images.forEach(image=> {                    //for each image observe the image
    imageObserver.observe(image);
})

