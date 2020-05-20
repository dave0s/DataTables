$(document).ready(function () {
  // test data
  var description =
    "Shift energy usage with storage to get 20% savings on your bill.";
  var getQuote = "Click here to request a quote and outline design.";

  var data = [
    {
      updated:
        '<button class="btn toggle text-left" type="button" data-toggle="collapse" data-target="#collapse1" aria-controls="collapse1" aria-expanded="false"> <img src="assets/images/plus.svg" alt=""> <span class="header-grey">2h</span> </button>',
      description: description,
      type:
        '<div class="text-center"> <img src="assets/images/finance-black.svg" alt=""> </div>',
      status: "pending",
      action:
        '<div class="row w-100"> <div class="col-xl-6"> <a href="#" class="btn btn-outline-success btn-accept">Accept</a> </div> <div class="col-xl-6"> <a href="#" class="btn btn-delete" title="delete"> <img src="assets/images/bin.svg" alt="delete"> </a> </div> </div>',
    },
    {
      updated:
        '<div id="collapse1" class="collapse"> <div class="row mb-4"> <div class="col-xl-4"> <h4 class="header-purple">' +
        description +
        '</h4> </div> <div class="col-xl-6"> <h4 class="header-grey">' +
        getQuote +
        "</h4> </div> </div> </div>",
      description: "",
      type: "",
      status: "",
      action: "",
    },
  ];

  // DataTable config
  $("#example").DataTable({
    data: data,
    columns: [
      { data: "updated" },
      { data: "description" },
      { data: "type" },
      { data: "status" },
      { data: "action" },
    ],
    order: [[0, "desc"]],
    // 'aoColumns': [ null, { 'bSortable': false } ],
    paging: false,
    scrollY: "600px",
    scrollX: false,
    scrollCollapse: true,
    searching: false,
    fixedColumns: false,
  });
  $(".even .sorting_1").attr("colspan", "5");
  $(".even .sorting_1").siblings().remove();

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
