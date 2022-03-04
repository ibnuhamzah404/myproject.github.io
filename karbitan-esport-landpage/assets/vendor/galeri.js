   $(document).ready(function() {
    var slider = $('#lightSlider').lightSlider({
       	
        responsive : [
        	 {
                breakpoint:1400,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1200,
                settings: {
                    item:2.5,
                    slideMove:1,
                    slideMargin:3,
                  }
            },

             {
                breakpoint:1100,
                settings: {
                    item:2.3,
                    slideMove:1,
                    slideMargin:3,
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });

     $('#ourteamSlider').lightSlider({
       	
        responsive : [
        	 {
                breakpoint:1400,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:1200,
                settings: {
                    item:2.5,
                    slideMove:1,
                    slideMargin:3,
                  }
            },

             {
                breakpoint:1100,
                settings: {
                    item:2.3,
                    slideMove:1,
                    slideMargin:3,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:600,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });


  $('.circleNext').click(function(){
        slider.goToNextSlide(); 
         
    });

  $('.circlePrev').click(function(){
        slider.goToPrevSlide(); 
    });
  });