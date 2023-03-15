$(".star").on("click", function() {
  $(".star").removeClass("active");

  $(this).addClass("active");
  $(this).prevAll().addClass("active");

  var rating = $(".star.active").length;

  console.log("Рейтинг: " + rating);
});