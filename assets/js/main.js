(function() {

    "use strict";

    $.fn.exists = function () {
        return this.length !== 0;
    }

// Breakpoints.
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        llarge: '(max-width: 1400px)',
        large:  '(max-width: 1280px)',
        medium: '(max-width: 1040px)',
        msmall: '(max-width: 950px)',
        small:  '(max-width: 736px)',
        xsmall: '(max-width: 480px)',
        xxsmall: '(max-width: 380px)'
    });

    // Disable animations/transitions until everything's loaded.
    $('body').addClass('is-loading');

    $(window).on('load', function() {
        if ($('body').hasClass('is-loading'))
            $('body').removeClass('is-loading');
    });

})();

function mainInit() {
    // Scroll to top arrow
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });

    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

    var $bannerButtonList = $('#banner ul');

    skel.on("+small", function() {
        $bannerButtonList.toggleClass('vertical');
    });

    skel.on("-small", function() {
        $bannerButtonList.toggleClass('vertical');
    });

    // Nav.
    var $nav = $('#nav'),
        $navToggle = $('a[href="#nav"]'),
        $navClose;

    // Event: Prevent clicks/taps inside the nav from bubbling.
    $nav.on('click', 'touchend', function(event) {
        event.stopPropagation();
    });

    // Event: Hide nav on body click/tap.
    $('body').on('click', 'touchend', function(event) {
        $nav.removeClass('visible');
    });

    // Event: Toggle nav on click.
    $navToggle.on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $nav.toggleClass('visible');
    });

    // Create close element.
    $navClose = document.createElement('a');
        $navClose.href = '#';
        $navClose.className = 'close';
        $navClose.tabIndex = 0;
        $nav.append($navClose);

    // Event: Hide on ESC.
    $(window).on('keydown', function(event) {
        if (event.keyCode == 27)
            $nav.removeClass('visible');
    });

    // Event: Hide nav on click.
    $navClose.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $nav.removeClass('visible');
    });

    // Close nav on link click
    $('#nav .links a').each(function() {
        $(this).on('click', function() {
            $nav.removeClass('visible');
        });
    })

    // Scroll to correct div
    var $scrollElement = $('a.anchor[id="' + window.location.hash.substring(1) + '"]')
    if ($scrollElement.exists()) {
        var yOffset = $scrollElement.offset().top;
        $(window).scrollTop(yOffset);
    }
}