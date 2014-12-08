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

      //jQuery(function () {
      //  jQuery('[data-typer-targets]').typer({
      //    typerInterval     : 2000,
      //    highlightSpeed    : 30,
      //    typeSpeed         : 200,
      //    clearDelay        : 500,
      //    typeDelay         : 30,
      //    clearOnHighlight  : true,
      //    typerDataAttr     : 'data-typer-targets',
      //    typerOrder        : 'sequential'
      //  });
      //});
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