
class OwlCarousel{
    constructor(carouseId){
        this.carouseId = carouseId;
        this.loop = false;
        this.autoplay = false;
        this.autoplayTimeout = 4000;
        this.autoplayHoverPause=true;
        this.smartSpeed= 300;
        this.dots = false;
        this.nav =  false;
        this.center =  false;
        this.margin = 30;
        this.responsive = {0: {items: 3 }};
    }
    init(){
        const carousel = $(this.carouseId).owlCarousel({
            responsive: this.responsive,
            loop: this.loop,
            autoplay: this.autoplay,
            autoplayTimeout: this.autoplayTimeout,
            autoplayHoverPause: this.autoplayHoverPause,
            smartSpeed: this.smartSpeed,
            dots: this.dots,
            nav: this.nav,
            center: this.center,
            margin: this.margin,
         
        });
    }
}

export default OwlCarousel;





