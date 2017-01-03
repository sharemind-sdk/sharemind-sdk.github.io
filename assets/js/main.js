(function() {

    "use strict";

    $.fn.exists = function () {
        return this.length !== 0;
    }

// Methods/polyfills.

    // addEventsListener
    var addEventsListener=function(o,t,e){var n,i=t.split(" ");for(n in i)o.addEventListener(i[n],e)}

    // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
    !function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();


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
    var $body = document.querySelector('body');
    $body.classList.add('is-loading');

    window.addEventListener('load', function() {
        $body.classList.remove('is-loading');
    });

    $.when(
        $.get("includes/banner.html", function(data) {
            $("#banner-include").html(data);
        }),
        $.get("includes/2016-12-release-notes.html", function(data) {
            $("#2016-12-include").html(data);
        }),
        $.get("includes/footer.html", function(data) {
            $("#footer-include").html(data);
        })
    ).then(function() {
        $(document).ready(function () {
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

            // Scroll to correct div
            var $scrollElement = $('a.anchor[id="' + window.location.hash.substring(1) + '"]')
            if ($scrollElement.exists()) {
                var yOffset = $scrollElement.offset().top;
                $("body").scrollTop(yOffset);
            }

            var $downloadButtonList = document.querySelector('#downloadButtonList'),
                $bannerButtonList = document.querySelector('#banner ul');

            skel.on("+small", function() {
                $bannerButtonList.classList.toggle('vertical');
                $downloadButtonList.classList.toggle('vertical');
            });

            skel.on("-small", function() {
                $bannerButtonList.classList.toggle('vertical');
                $downloadButtonList.classList.toggle('vertical');
            });

            // Nav.
            var $nav = document.querySelector('#nav'),
                $navToggle = document.querySelector('a[href="#nav"]'),
                $navLinks = document.querySelectorAll('#nav .links a'),
                $navClose;

            // Event: Prevent clicks/taps inside the nav from bubbling.
            addEventsListener($nav, 'click touchend', function(event) {
                event.stopPropagation();
            });

            // Event: Hide nav on body click/tap.
            addEventsListener($body, 'click touchend', function(event) {
                $nav.classList.remove('visible');
            });

            // Event: Toggle nav on click.
            $navToggle.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();

                $nav.classList.toggle('visible');
            });


            // Create close element.
            $navClose = document.createElement('a');
                $navClose.href = '#';
                $navClose.className = 'close';
                $navClose.tabIndex = 0;
                $nav.appendChild($navClose);

            // Event: Hide on ESC.
            window.addEventListener('keydown', function(event) {
                if (event.keyCode == 27)
                    $nav.classList.remove('visible');
            });

            // Event: Hide nav on click.
            $navClose.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();

                $nav.classList.remove('visible');
            });

            // Close nav on link click
            for (var i = 0; i < $navLinks.length; i++) {
                $navLinks[i].addEventListener('click', function(event) {
                    $nav.classList.remove('visible');
                });
            }

        });

    });

})();
