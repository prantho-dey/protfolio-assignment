
(function($) {

    $('.humburger').on('click', function(){
        $('.main-menu').slideToggle();
    })


    $(document).ready(function() {
        allfunction.init();
        // window.addEventListener('load',function(){
        //     document.querySelector('body').classList.add("loaded")  
        // });
    });
    
})(jQuery);
