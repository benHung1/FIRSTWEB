$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


$(function(){
  // 點擊按鈕，選單縮放
  $("button.btn_switch").on("click", function(){
  $("nav.nav").slideToggle();
});
});