/* Burger Menu */

$('.menu div').on('click', () => {
    $('.menu nav ul').toggleClass('open');
    $('.menu div span').toggleClass('active');
});