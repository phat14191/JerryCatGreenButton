$(document).ready(function() {
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");

  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");

  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");

  });
});
