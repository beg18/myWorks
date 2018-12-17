$(document).ready(function () {
   var pull = $('#pull');
   var nav = $('#mobile-nav');



   $(pull).on('click', function (e) {
       e.preventDefault();

       $(nav).slideToggle();

       $(this).toggleClass("pull navigation__link--active");
   });

   var w = $(window).width();

   if (w < 1200){
       $('nav.navigation a').on('click', function(){
           menu.slideToggle();
       });
   }


    $(window).resize(function () {
        var w = $(window).width();

        if (w > 992 && nav.is(':hidden')){
            nav.removeAttr('style');
        }
    });

    /* Call OwlCarousel plugin: Вызов плагина OwlCarousel*/
    $("#slider_container").owlCarousel({
         singleItem : true,
         navigation : true,
         navigationText :[" "," "],
         theme: "slider-container",
         slideSpeed: 600

    });
    //slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

});