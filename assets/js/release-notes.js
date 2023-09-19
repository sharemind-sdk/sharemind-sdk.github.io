$(function() {

    "use strict";

    $.when(
        $.get("includes/banner.html", function(data) {
            $("#banner-include").html(data);
        }),
        $.get("includes/2023-09-release-notes.html", function(data) {
            $("#2023-09-include").html(data);
        }),
        $.get("includes/2022-03-release-notes.html", function(data) {
            $("#2022-03-include").html(data);
        }),
        $.get("includes/2020-12-release-notes.html", function(data) {
            $("#2020-12-include").html(data);
        }),
        $.get("includes/2019-03-release-notes.html", function(data) {
            $("#2019-03-include").html(data);
        }),
        $.get("includes/2018-12-1-release-notes.html", function(data) {
            $("#2018-12-1-include").html(data);
        }),
        $.get("includes/2018-12-release-notes.html", function(data) {
            $("#2018-12-include").html(data);
        }),
        $.get("includes/2018-09-release-notes.html", function(data) {
            $("#2018-09-include").html(data);
        }),
        $.get("includes/2018-06-release-notes.html", function(data) {
            $("#2018-06-include").html(data);
        }),
        $.get("includes/2018-03-release-notes.html", function(data) {
            $("#2018-03-include").html(data);
        }),
        $.get("includes/2017-12-release-notes.html", function(data) {
            $("#2017-12-include").html(data);
        }),
        $.get("includes/2017-09-release-notes.html", function(data) {
            $("#2017-09-include").html(data);
        }),
        $.get("includes/2017-06-release-notes.html", function(data) {
            $("#2017-06-include").html(data);
        }),
        $.get("includes/2017-03-release-notes.html", function(data) {
            $("#2017-03-include").html(data);
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