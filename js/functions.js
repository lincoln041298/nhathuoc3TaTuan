( function( $ ) {
	var body;

	$( document ).ready( function() {
		body = $( document.body );
      
        $('.search__input-main').on('focus', function(){
            $('.search-suggest').addClass('active active-1');
        });
        
        $('.search__input-main').on('keyup', function(){
            if( $('.search-suggest').hasClass('active') ){
                //Do nothing
            } else {
                $('.search-suggest').addClass('active');
            }
            $('.search-suggest').removeClass('active-1');
            $('.search-suggest').addClass('active-2');
        });
        
        $('.search__input-second').on('focus', function(){
            $('.search-suggest').addClass('active active-1');
        });
        
        $('.search__input-thuoc').on('focus', function(){
            $('.search-suggest').addClass('active active-1');
        });
        
        
        $('body').on('click', function(e){
            if (!$(event.target).closest(".search-form").length) {
                $('.search-suggest').removeClass('active active-1 active-2 active-3');
            }
        });
        
        $('.header__otherbutton--text').on('click', function(){
            $('.menu-order').slideToggle();
           return false; 
        });
        
        $('.scroll-top').on('click', function(){
            $("html, body").animate({ scrollTop: 0 }, 200);
            return false;
        });
        
        $('.nav-mobile > li.has-dropdown > a').on('click', function(){
            $(this).siblings('.dropdown').slideToggle();
            
            return false;
        });
        
        $('.radio-style').on('click', function(){
            $(this).parent('.radio-wrap').find('.radio-style').removeClass('checked');
            $(this).addClass('checked');
        });
        
        $('.checkbox-style').on('click', function(){
            $(this).parents('.checkbox-wrap').find('.checkbox-style').removeClass('checked');
            $(this).addClass('checked');
        });
        
        $('.thead-dropdown').on('click', function(){
            if( $(this).parent().hasClass('active') ){
                $(this).parent().removeClass('active');
            }  else {
                $(this).parent().addClass('active');
            }
        });
        
        	       
	} );
    
} )( jQuery );