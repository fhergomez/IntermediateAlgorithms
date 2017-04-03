$(document).ready(function () {

  $.getScript("js/sumAll.js", function(){
    console.log(" SumAll Script loaded");
  });

  $.getScript("js/diffArray.js", function(){
    console.log("diffArray Script loaded");
  });

  $.getScript("js/convertToRoman.js", function(){
    console.log("convertToRoman Script loaded");
  });



});