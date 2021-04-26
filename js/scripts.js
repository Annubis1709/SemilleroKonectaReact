const { event } = require("grunt");

$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
$(function () {
    // -- LOGIN --// 
    $('#reserve_Button').click(function () {
        $('#reserve_table_Modal').modal('toggle');
    });
    // -- RESERVE TABLE --//
    $('#login_Button').click(function () {
        $('#loginModal').modal('toggle');
    });
}); 