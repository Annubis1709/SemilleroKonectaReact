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

/*
function buttonFlip() {   
    var parentButton = document.getElementById("carouselButton");
    var childSpan = document.getElementById("carouselButton_span");
    if (parentButton.contains(childSpan) && childSpan.classList.contains("fa-pause")) {
        $("#mycarousel").carousel('pause');
        childSpan.classList.remove("fa-pause");
        childSpan.classList.add("fa-play");
    }
    else {
        $("#mycarousel").carousel('cycle');
        childSpan.classList.remove("fa-play");
        childSpan.classList.add("fa-pause");
    }
  }
  */