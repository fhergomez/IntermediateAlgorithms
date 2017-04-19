$(document).ready(function () {

  $.getScript("js/sumAll.js", function(){
    console.log(" SumAll Script loaded");
  });

  $.getScript("js/diffArray.js", function () {
    console.log("diffArray Script loaded");
  });

  $.getScript("js/convertToRoman.js", function () {
    console.log("convertToRoman Script loaded");
  });

  $.getScript("js/whatIsInAName.js", function () {
    console.log("whatIsInAName Script loaded");
  });

  $.getScript("js/pigLatin.js", function () {
    console.log("pigLatin Script loaded");
  });

  $.getScript("js/searchAndReplace.js", function() {
    console.log("searchAndReplace loaded");
  });

});