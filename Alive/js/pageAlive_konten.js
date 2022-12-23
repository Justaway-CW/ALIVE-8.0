$(".step").click(function () {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
  $("#line-progress").css("width", "3%");
  $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
  $("#line-progress").css("width", "35%");
  $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
  $("#line-progress").css("width", "68%");
  $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
  $("#line-progress").css("width", "100%");
  $(".production").addClass("active").siblings().removeClass("active");
});

$(function () {
  if (screen.width < 768) {
    $(".medik1").addClass("disactive").siblings().removeClass("disactive");
  } else {
    $(".medik2").addClass("disactive").siblings().removeClass("disactive");
  }
});
