$(document).ready(function () {

  function sumAll(arr) {
    var list = [];
    var lower = Math.min(arr[0], arr[1]);
    var higher = Math.max(arr[0], arr[1]);

    for (var i = lower;i <= higher;i++) {
      list.push(i);
    }
    // console.log(list);
    var sum = list.reduce(function(a,b){
      return a + b;
    });
    // console.log(sum);
    return sum;
  }

  $('.number1').on('focus', function () {
    $('.number1').val('');
    $('.number2').val('Give me another Number');
  });
  $('.number2').on('focus', function () {
    $('.number2').val('');
    $('button').show();
  });

  $('.submit').on('click', function (e) {
    e.preventDefault();
    var num1 = $('.number1').val();
    var num2 = $('.number2').val();
    // console.log(num1 +','+num2);
    if (num1 < num2) {
      $('#sumInARange').html('The sum of the range from ' + num1 + ' to ' + num2 + ' is: ' + sumAll([num1,num2]));
    } else {
      $('#sumInARange').html('The sum of the range from ' + num2 + ' to ' + num1 + ' is: ' + sumAll([num1,num2]));
    }
  });

  function diffArray (arr1, arr2) {
    var newArr = [];

    // looping through arr1 to find elements that are not in arr2
    for (var i = 0; i < arr1.length;i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
      }
    }

    // looping through arr2 to find elements that are not in arr1
    for (var j = 0;j < arr2.length;j++) {
      if (arr1.indexOf(arr2[j]) === -1) {
        newArr.push(arr2[j]);
      }
    }
    // console.log(newArr);
    return newArr;
  }


});