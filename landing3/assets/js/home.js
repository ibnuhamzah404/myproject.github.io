if (screen.width < 500) {
  var perPage = 3;
} else {
  var perPage = 10;
}


new List("test-list", {
  valueNames: ["name"],
  page: perPage,
  plugins: [
    // can not make left and right work on List.js 1.5.0, so I use 1.3.0 instead, which requires List.pagination.js plugin
    ListPagination({
      paginationClass: "pagination-layout",
      left: 2,
      right: 2
    })
  ]
}).on("updated", function (list) {
  var isFirst = list.i == 1;
  var isLast = list.i > list.matchingItems.length - list.page;

  // make the Prev and Nex buttons disabled on first and last pages accordingly
  $(".pagination-prev.disabled, .pagination-next.disabled").removeClass(
    "disabled"
  );
  if (isFirst) {
    $(".pagination-prev").addClass("disabled");
  }
  if (isLast) {
    $(".pagination-next").addClass("disabled");
  }

  // hide pagination if there one or less pages to show
  if (list.matchingItems.length <= perPage) {
    $(".pagination-wrap").hide();
  } else {
    $(".pagination-wrap").show();
  }
});

$(".pagination-next").click(function () {
  $(".pagination-layout .active")
    .next()
    .trigger("click");
});
$(".pagination-prev").click(function () {
  $(".pagination-layout .active")
    .prev()
    .trigger("click");
});