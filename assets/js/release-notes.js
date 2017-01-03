$(function() {

    "use strict";

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
        mainInit();
    });

});