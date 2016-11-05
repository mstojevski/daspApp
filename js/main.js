	//fullpage.js
	$(document).ready(function() {
			$('#js-fullpage').fullpage({
				'verticalCentered': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
				'navigationTooltips': ['Home', 'How it works?', 'Amazing', 'Simple'],
			});
		});


	$(document).ready(function(){
      $('.slider').slick({
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        infinite:false,

      });
    });
