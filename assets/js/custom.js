$(document).ready(function () {
  // test offer headings
  var str1 = "Shift energy usage with storage to get 20% savings on your bill.";
  var str2 = "Click here to request a quote and outline design.";
  $("h4.header-purple").text(str1);
  $("h5.header-purple").text(str1);
  $("h4.header-grey").text(str2);
  $("h5.header-grey").text(str2);

  // DataTable config
  $("#dataTable").DataTable();
  // var table = $('#dataTable').DataTable({
  //    scrollY: "600px",
  //    scrollX: true,
  //    scrollCollapse: true,
  //    paging: false,
  //    fixedColumns: true,
  // });

  // accordion click events
  $(".toggle").on("click", function () {
    var img = $(this).find("img");

    if ($(this).attr("aria-expanded") === "false") {
      img.attr("src", "assets/images/minus.svg");
      img.attr("alt", "-");
    } else {
      img.attr("src", "assets/images/plus.svg");
      img.attr("alt", "+");
    }
  });
  $(".toggle2").on("click", function () {
    var img = $(this).parent().prev().find("img");

    if ($(this).attr("aria-expanded") === "false") {
      img.attr("src", "assets/images/minus.svg");
      img.attr("alt", "-");
    } else {
      img.attr("src", "assets/images/plus.svg");
      img.attr("alt", "+");
    }
  });

  // primary action buttons
  $(".btn-accept").on("click", function () {
    console.log("accept clicked");
  });
  $(".btn-delete").on("click", function () {
    console.log("delete clicked");
  });
  $(".btn-delete").mouseenter(function () {
    $(this).find("img").attr("src", "assets/images/bin-hover.svg");
  });
  $(".btn-delete").mouseleave(function () {
    $(this).find("img").attr("src", "assets/images/bin.svg");
  });

  // TODO: Dropdown events
  $(".dropdown-menu a").on("click", function () {
    if ($(this).hasClass("automate")) {
      console.log("automate clicked");
    } else if ($(this).hasClass("finance")) {
      console.log("investigate clicked");
    } else if ($(this).hasClass("investigate")) {
      console.log("investigate clicked");
    } else {
      console.error("dropdown action not defined");
    }
  });
  // Dropdown icon states
  $(".dropdown-menu .automate").mouseenter(function () {
    $(this).find("img").attr("src", "assets/images/automate.svg");
  });
  $(".dropdown-menu .automate").mouseleave(function () {
    $(this).find("img").attr("src", "assets/images/automate-black.svg");
  });
  $(".dropdown-menu .finance").mouseenter(function () {
    $(this).find("img").attr("src", "assets/images/finance.svg");
  });
  $(".dropdown-menu .finance").mouseleave(function () {
    $(this).find("img").attr("src", "assets/images/finance-black.svg");
  });
  $(".dropdown-menu .investigate").mouseenter(function () {
    $(this).find("img").attr("src", "assets/images/investigate.svg");
  });
  $(".dropdown-menu .investigate").mouseleave(function () {
    $(this).find("img").attr("src", "assets/images/investigate-black.svg");
  });
});
