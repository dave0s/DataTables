$(document).ready(function () {
  // test offer templates
  function Offer(description, toggle, type, actions, expander) {
    (this.description = description),
      (this.toggle = toggle),
      (this.type = type),
      (this.actions = actions),
      (this.expander = expander);
  }
  var subheading =
    "Shift energy usage with storage to get 20% savings on your bill.";
  var quote = "Click here to request a quote and outline design.";
  var description =
    '<h5 class="header-purple">' +
    subheading +
    '</h5><h5 class="header-grey">' +
    quote +
    "</h5>";
  var type =
    '<div class="text-center"> <img src="assets/images/finance-black.svg" alt=""> </div>';
  var actions =
    '<div class="row w-100"> <div class="col-xl-6"> <button class="btn btn-outline-success btn-accept">Accept</a> </div> <div class="col-xl-6"> <button class="btn btn-delete" title="delete"> <img src="assets/images/bin.svg" alt="delete"> </button> </div> </div>';
  var toggle =
    '<button class="btn toggle text-left" type="button" data-toggle="collapse" data-target="#collapse1" aria-controls="collapse1" aria-expanded="false"> <img src="assets/images/plus.svg" alt=""> <span class="header-grey">2h</span> </button>';
  var expander =
    '<div id="collapse1" class="collapse"> <div class="row mb-4"> <div class="col-xl-4"> <h4 class="header-purple">' +
    subheading +
    '</h4> </div> <div class="col-xl-6"> <h4 class="header-grey">' +
    quote +
    "</h4> </div> </div> </div>";

  var row1 = new Offer(description, toggle, type, actions, expander);

  // unique column items
  toggle =
    '<button class="btn toggle text-left" type="button" data-toggle="collapse" data-target="#collapse2" aria-controls="collapse2" aria-expanded="false"> <img src="assets/images/plus.svg" alt=""> <span class="header-grey">2h</span> </button>';
  expander =
    '<div id="collapse2" class="collapse"> <div class="row mb-4"> <div class="col-xl-4"> <h4 class="header-purple">' +
    subheading +
    '</h4> </div> <div class="col-xl-6"> <h4 class="header-grey">' +
    quote +
    "</h4> </div> </div> </div>";

  var row2 = new Offer(description, toggle, type, actions, expander);

  var data = [
    {
      updated: row1.toggle,
      description: row1.description,
      type: row1.type,
      status: "pending",
      action: row1.actions,
    },
    {
      updated: row1.expander,
      description: "",
      type: "",
      status: "",
      action: "",
    },
    {
      updated: row2.toggle,
      description: row2.description,
      type: row2.type,
      status: "pending",
      action: row2.actions,
    },
    {
      updated: row2.expander,
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

  // Accordion menu click events
  $(".toggle").on("click", function () {
    var img = $(this).find("img");

    if (!$(".sorting_1 .collapse").hasClass("show")) {
      $(".sorting_1 .collapse")
        .parent()
        .attr("colspan", "5")
        .siblings()
        .remove();
    }

    if ($(this).attr("aria-expanded") === "false") {
      img.attr("src", "assets/images/minus.svg");
      img.attr("alt", "-");
    } else {
      img.attr("src", "assets/images/plus.svg");
      img.attr("alt", "+");
    }
  });

  // Primary action buttons
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
