// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require private_pub
//= require lib/jquery.spin
//= require_tree .

$.fn.exists = function () {
    return this.length !== 0;
}


// Back functions
var thinking = function(opt) {
  if (opt == null) {
    opt = true;
  }
  if (opt) {
    $(".spiner-container").slideDown("fast",function() {
      $(this).spin("large");
    });
  } else{
    $(".spiner-container").spin(false);
    $(".spiner-container").slideUp();
  };
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}