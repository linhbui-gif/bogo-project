
$("#target").click(function() {
    alert( "Handler for .click() called." );
});

class Slick{
    constructor(slickId){
        this.slickId            =   slickId;
        this.infinite           =   true;
        this.adaptiveHeight     =   false;
        this.Accessibility      =   false;
        this.dots               =   true;
        this.fade               =   false;
        this.focusOnSelect      =   false;
        this.pauseOnFocus       =   false;
        this.Swipe              =   false;
        this.touchMove          =   false;
        this.centerMode         =   false,
        this.vertical           =   false;
        this.arrows             =   true;
        this.mobileFirst        =   true;
        this.variableWidth      =   false;
        this.initialSlide       =   0;
        this.rows               =   1;
        this.slidesToShow       =   1;
        this.slidesToScroll     =   1;
        this.slidesPerRow       =   1;
        this.slidesToScroll     =   1;
        this.Speed              =   300;
        this.autoplay           =   true,
        this.autoplaySpeed      =   2000;
        this.appendDots         =   "";
        this.centerPadding      =   '50px';
        this.easing             =   "'linner'( or swing,_default )";
        this.cssEase            =   'linear';
        this.prevArrow          =   '<button type="button" class="slick-prev"></button>'
        this.nextArrow          =   '<button type="button" class="slick-next"></button>',
        this.responsive         =   [
                                                {breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1}},
                                                {breakpoint: 480,settings: {arrows: false,centerMode: true, centerPadding: '40px',slidesToShow: 1}} 
                                            ];
                        
    }
    init(inputObject) {
        for (const property in inputObject) {
            this[property] = inputObject[property];
        }
    }

  

    run(){
        const slick = $(this.slickId).slick({
            slickId            :   this.slickId        ,
            infinite           :   this.infinite       ,
            adaptiveHeight     :   this.adaptiveHeight ,
            arrows             :   this.arrows         ,
            Accessibility      :   this.Accessibility  ,
            dots               :   this.dots           ,
            vertical           :   this.vertical       ,
            fade               :   this.fade           ,
            focusOnSelect      :   this.focusOnSelect  ,
            mobileFirst        :   this.mobileFirst    ,
            pauseOnFocus       :   this.pauseOnFocus   ,
            variableWidth      :   this.variableWidth  ,
            Swipe              :   this.Swipe          ,
            touchMove          :   this.touchMove      ,
            slidesToShow       :   this.slidesToShow   ,
            slidesToScroll     :   this.slidesToScroll ,
            slidesToScroll     :   this.slidesToScroll ,
            initialSlide       :   this.initialSlide   ,
            rows               :   this.rows           ,
            slidesPerRow       :   this.slidesPerRow   ,
            Speed              :   this.Speed          ,
            autoplaySpeed      :   this.autoplaySpeed  ,
            appendDots         :   this.appendDots     ,
            centerPadding      :   this.centerPadding  ,
            easing             :   this.easing         ,
            cssEase            :   this.cssEase        ,
            centerMode         :   this.centerMode     ,
            nextArrow          :   this.nextArrow      ,
            prevArrow          :   this.prevArrow      ,
            responsive         :   this.responsive     ,
         
        });
    }
}

export default Slick;





