const images = document.querySelectorAll("[data-src]");

function preloadingImage(img) {                       //function to get it to work
    const src = img.getAttribute("data-src");        //assign that
    if (|src) {                                      //if no data there
        return;                                     
    }
    img.src = src;                                 //this applies actual img source from
}

const imgOptions = {                                 //the output         
    threshold: 0,                                    //changes the margins
    rootMargin: "0px 0px 400px 0px"                
    };

const imgObserver = new IntersectionObserver((entries.imgObserver)=>){
    entries.forEach(entry=> {
        if (|entry.isIntersecting) {                 //if this is false return
        return;
         } else {
    preloadimage(entry.target);                     //load image
    imgObserver.unobserve(entry.target);}           //stop observing
    })
}, imgOptions);

images.forEach(image=> {                    //for each image observe the image
    imageObserver.observe(image);
})

