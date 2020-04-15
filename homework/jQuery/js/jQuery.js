$(document).ready(function(){

  $(".fancyTitle").lettering();

  $(".word_split").lettering('words');

  $(".line_split").lettering('lines');

  $(".rotate").lettering('words') .children("span").css({'display':'inline-block', '-webkit-transform':'rotate(-25deg)'});

  $(".title3").lettering()
  .children("span").css({'display':'inline-block', '-webkit-transform':'rotate(-15deg)'});


  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").hide();

  $("#button1").click(function(){
    $("#set1").show();
    $("#set2").hide();
    $("#set3").hide();
    $("#set4").hide();
    $("#set5").hide();
});

$("#button2").click(function(){
  $("#set1").hide();
  $("#set2").show();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").hide();
});

$("#button3").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").show();
  $("#set4").hide();
  $("#set5").hide();
});

$("#button4").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").show();
  $("#set5").hide();
});

$("#button5").click(function(){
  $("#set1").hide();
  $("#set2").hide();
  $("#set3").hide();
  $("#set4").hide();
  $("#set5").show();
});

$("#button4").click(function(){
  $(".main div:nth-child(4) p").css("color", "darkblue");
});

$("#button2").click(function() {
  $(".body h2").html("Conch");
});

$("#button1").click(function() {
  $(".body h2").html("Exuma Islands ");
});

$("#button3").click(function() {
  $(".body h2").html("Pigs Beach ");
});

$("#button4").click(function() {
  $(".body h2").html("Thunderball Cave ");
});

$("#button5").click(function() {
  $(".body h2").html("Swimming With Sharks ");
});



});
