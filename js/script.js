$(window).scroll(function() {
    if($(this).scrollTop() > 60) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});

$(document).ready(function() {
    setTimeout(function() {
        $(".typed").typed({
            strings: [" great closers", "n't statisticians", " relationship builders", "n't data scientists"],
            typeSpeed: 20,
            backSpeed: 20,
            startDelay: 200,
            backDelay: 800,
            showCursor: false,
            loop: true,
            loopCount: 2
        });
    }, 500);

    $(".screenshots").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        autoPlay: true
    });
});