$(function() {
  $(document).on("scroll", function() {
    if($(window).scrollTop() <= 1) {
      $("header").removeClass("scrolled");
    }
    else {
      $("header").addClass("scrolled");
    }
  });

  $(".menu-items li a").click(function(event) {
    event.preventDefault();
  });

  ($("header")).onePageNav({
    changeHash: true,
    currentClass: 'active'
  });
});
