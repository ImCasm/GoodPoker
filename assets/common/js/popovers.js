// Show popovers if there are new users
const isNewUser = true;

if (isNewUser) {
  $('[data-toggle="popover"]').popover({ html: true, trigger: "manual" });

  const pop1 = $("#popover1");
  pop1.popover("show");
  $("body").css("background-color", "background-color: rgba(0, 0 , 0, 0.8);");

  $("#btn-close-tour").click(function () {
    pop1.popover("dispose");
  });

  $(document).on("click", "#btnToCloseTour", function () {
    closePopover("popover7");
  });

  /**
   * Close popover by id
   */
  function closePopover(id) {
    $(`#${id}`).popover("hide");
  }

  /**
   * Open popover by id
   */
  function openPopover(id) {
    $(`#${id}`).popover("show");
  }

  //Click listeners for 7 popovers

  for (let i = 1; i < 7; i++) {
    $(document).on("click", `#btnToPop${i + 1}`, function () {
      closePopover(`popover${i}`);
      openPopover(`popover${i + 1}`);
    });
  }
}
