

(function ($) {
	'use strict';
	
	var controller = new ScrollMagic.Controller();
		$('.js-text-parallax .fx-wrap').each(function (index, el) {
			var id = 'text-parallax-' + index;
			var $this = $(this);
			$this.attr('id', id);
	
			var offset = parseInt($this.attr('data-x'), 10) || 200;
	
			var tween = TweenMax.to('#' + id + ' .fx-target', 2, {
				x: offset
			});
	
			new ScrollMagic.Scene({
				triggerElement: '#' + id, triggerHook: 1,
				duration: window.innerHeight * 2
			}).setTween(tween)
			// .addIndicators()
			.addTo(controller);
		});
  $(window).on('load', function() {
//   	console.log('aa')
    $('.custom-check-box').each(function(){
      console.log('aa111')
      var a = $(".custom-check-box input[type=radio][name=id-pro]:checked" ).val();
      $('.product-details h3').hide();
      $('#'+'price-'+a).show()
      
    	console.log($('#'+'price-'+a))
      
    })
  })
	$('.custom-check-box input').on('change',function(){
      var a = $(".custom-check-box input[type=radio][name=id-pro]:checked" ).val();
		 var b = $('.product-details h3').attr('data-id');
      
      $('.product-details h3').hide();
      $('#'+'price-'+a).show()
      
    	console.log($('#'+'price-'+a))
      
    })

})(jQuery);


