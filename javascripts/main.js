var WW, WH;

$(document).ready(function(){
  WW = $(window).width();
  WH = $(window).height();
});


window.onload = function(){
  map.initialize();
}

$(window).on('resize', function(){
  map.setSizes();
});
