// Steper interaction
$(document).on("click", "a.link-steper-list", function () {
  $("a.link-steper-list").parent("li").removeClass("active");
  $("a.active").parent("li").addClass("active");
});
