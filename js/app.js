$(function() {
  $(document).on("scroll", function() {
    if($(window).scrollTop() <= 1) {
      $("header").removeClass("scrolled");
    }
    else {
      $("header").addClass("scrolled");
    }
  });
});
