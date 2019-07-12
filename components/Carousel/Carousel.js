class Carousel {
       constructor(element) {
        this.element = element;
        this.leftButton = document.querySelector(".left-button");
        this.rightButton = document.querySelector(".right-button");
        this.imgCarousel = document.querySelectorAll(".carousel .img");
        this.currentIndex = 0;
        this.currentImg = this.imgCarousel[this.currentIndex];
        this.currentImg.style.display = "block";
       
        this.leftButton.addEventListener("click", () => {
            this.previous()
        });
        this.rightButton.addEventListener("click", () => {
            this.next()
        });
       }
   
    previous() {
        const images = document.querySelectorAll('.carousel .img');
        images.forEach((image) => {
            image.style.display = "none"});
            this.currentIndex -=1;
            if (this.currentIndex < 0) {
                this.currentIndex = 3;
            }
            if(this.currentIndex > 3) {
                this.currentIndex = 0;
            }
            this.imgCarousel[this.currentIndex].style.display = "block";
        

    };

    next() {
        const images = document.querySelectorAll('.carousel .img');
        images.forEach((image) => {
            image.style.display = "none"});
            this.currentIndex +=1;
            if(this.currentIndex < 0) {
                this.currentIndex = 3;
            }
            if(this.currentIndex > 3) {
                this.currentIndex = 0;
            }
            this.imgCarousel[this.currentIndex].style.display = "block";
        
    };

}

   let carousel = document.querySelectorAll('.carousel').forEach(img => new Carousel(img));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
