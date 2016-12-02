$(document).ready(function(){

});


$('#btnShow').on('click', function () {

    $('.display-basic').show();

})

$('#btnHide').on('click', function () {

    $('.display-basic').hide();

})


$('#btnToggle').on('click', function () {

    $('.display-basic').toggle();

})



/* function pageLoad() {

        $('#part3').show();
        $('#part3').show();

      } */

      //$(document).on("pageload",function(){
        $('.part3').show();
    //  });


/// Part 4


$('#btnFadeIn').on('click', function () {

    $('.isplay-fade').fadeIn(5000);

})

$('#btnFadeOut').on('click', function () {

    $('.isplay-fade').fadeOut(5000);

})


$('#btnFadeToggle').on('click', function () {

    $('.isplay-fade').fadeToggle(5000);

})


/// Part 5


$('#btnSlideUp').on('click', function () {

    $('.display-slide').slideUp(5000);

})


$('#btnSlideDown').on('click', function () {

    $('.display-slide').slideDown(5000);

})



$('#btnSlideToggle').on('click', function () {

    $('.display-slide').slideToggle();

})
