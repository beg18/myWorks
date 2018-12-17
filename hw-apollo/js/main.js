$(document).ready(function() {



    // ������ ��� ������ � ������� ����������� ���� �� ����������
    // ������� ��������� ��� ������ � ��� ����
    var pull = $('#navigation-toggle');
    var menu = $('.navigation ul');

    // ��������� ������� ��� ������� �� ������
    $(pull).on("click", function(e){

        // �������� ����������� ��������� ������ � ��������
        e.preventDefault();

        // ���������/�������� ����
        menu.slideToggle();

        // ��������� ����������� --active
        $(this).toggleClass('navigation__toggle-button--active');

    });



    // ��� ��������� ������� ����, � ������� �������, ���� ���� ���� ������, ���������� ���
    // � � ������ ������� ����������� --active
    $(window).resize(function(){
        var w = $(window).width();
        if(w > 992) {
            menu.removeAttr('style');
            pull.removeClass('navigation__toggle-button--active');
        } else {

        }
    });

    // �������� ���� ��� ����� �� ���� �� ��������� � ��������
    // �� ����� �� ������ � ���� ��������� �-� fnstart();
    $('nav.navigation a').on("click", function(){
        fnstart();
    });

    // � �-�� fnstart(); ��������� - ���� ���� ������� (��������� �� ������� ������ --active � ������ pull)
    // ����� ������� ����� ����������� --active � ������ pull
    // � �����������/�������� ����
    function fnstart(){
        if ( $("#navigation-toggle").hasClass("navigation__toggle-button--active")  ) {
    			pull.toggleClass('navigation__toggle-button--active');
            menu.slideToggle();
        }
    };










    // ����� �������� owl-carousel
    $("#top-carousel").owlCarousel({
        singleItem: true,
        navigation: true,
        theme: "top-slider-theme",
        navigationText : ["",""],
        slideSpeed: 600
    });



    //slide2id - ������� ��������� �� ������� ������ ��������
    $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
        highlightSelector:"nav a"
    });

});








