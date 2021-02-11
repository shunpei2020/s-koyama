$('.burger').on('click', function(){
  $('.nav-links').toggleClass('nav-active');
  $(this).toggleClass('toggle');
  $('body').toggleClass('noscroll')
});
