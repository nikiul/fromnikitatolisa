$("a.scroll-to").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 0
    }, 800);
});


jQuery(document).ready(function() {
    jQuery('.way__item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft ',
        classToRemove: 'hidden',
        offset: 200
    });
});


$('.photos__content').owlCarousel({
    loop:true,
    margin:10,
    autoHeight:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2
        },
        1400: {
            items:3
        }
    }
});


function initparticles() {
    hearts();
 }

 function hearts() {
    $.each($(".particletext.hearts"), function(){
       var heartcount = ($(this).width()/50)*5;
       for(var i = 0; i <= heartcount; i++) {
          var size = ($.rnd(60,120)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }

 jQuery.rnd = function(m,n) {
       m = parseInt(m);
       n = parseInt(n);
       return Math.floor( Math.random() * (n - m + 1) ) + m;
 }

 initparticles();

