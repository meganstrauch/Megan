$(document).ready(function(){

  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();

  $("#button1").click(function(){
    $("#set1").show();
    $("#set2").hide();
    $("#set3").hide();
    $("#set4").hide();
});

$("#button2").click(function(){
  $("#set1").hide();
  $("#set2").show();
  $("#set3").hide();
  $("#set4").hide();
});

$("#button3").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").show();
  $("#set4").hide();
});

$("#button4").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").show();
});

});
