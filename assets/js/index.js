$(function() {

    "use strict";

    $(document).ready(function () {
        $.when(
            $.get("includes/banner.html", function(data) {
                $("#banner-include").html(data);
            }),
            $.get("includes/footer.html", function(data) {
                $("#footer-include").html(data);
            })
        ).then(function() {
            var $downloadButtonList = document.querySelector('#downloadButtonList');

            skel.on("+small", function() {
                $downloadButtonList.classList.toggle('vertical');
            });

            skel.on("-small", function() {
                $downloadButtonList.classList.toggle('vertical');
            });
            mainInit();
        });
    });

});