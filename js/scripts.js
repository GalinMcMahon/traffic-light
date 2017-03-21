$(function() {
	$(".greenlight").click(function() {
  	$(".green-light").show();
    $(".yellow-light").hide();
    $(".red-light").hide();
  });
});

$(function() {
	$(".yellowlight").click(function() {
  	$(".green-light").hide();
    $(".yellow-light").show();
    $(".red-light").hide();
  });
});

$(function() {
	$(".redlight").click(function() {
  	$(".green-light").hide();
    $(".yellow-light").hide();
    $(".red-light").show();
  });
});
