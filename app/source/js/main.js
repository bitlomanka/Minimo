
$(document).ready(function(){

  
    // mobile-navigation
    
    $('.mobile-navigation').on("click", function(e){
        e.stopPropagation();
        var menu = $('.header').find('.navigation-list');
        
        if(menu.is(":hidden")){
            menu.slideDown(400);
        }else{
            menu.slideUp(400);
        }
    });
    
    //ie placeholder
    
    $('input, textarea').placeholder();
    
});






