$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.up-arrow').fadeIn();
    } else {
      $('.up-arrow').fadeOut();
    }
  });
  $('.up-arrow').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 800);
    return false;
  })
});