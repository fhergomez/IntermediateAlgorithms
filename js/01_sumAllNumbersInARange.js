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

  $('.number1, .arr1').on('focus', function () {
    $(this).val('').css('color','black');
  });
  $('.number2, .arr2').on('focus', function () {
    $(this).val('').css('color','black');
  });

  $('.add').on('click', function (e) {
    var preventDefault = e.preventDefault();
    var num1 = $('.number1').val();
    var num2 = $('.number2').val();
    console.log(num1 +','+ num2);
    if (isNaN(num1) || num1 === '' || num1 === 'Give me a Number') {
      $('.number1').val('That is not a valid number').css('color','red');
      return preventDefault;
    }
    if (isNaN(num2) || num2 === '' || num2 === 'Give me another Number') {
      $('.number2').val('That is not a valid number2').css('color','red');
      console.log('Im here');
      return preventDefault;
    }
    if (num1 < num2) {
      $('#sumInARange').html('The sum of the range from ' + num1 + ' to ' + num2 + ' is: ' + sumAll([num1,num2]));
    } else {
      $('#sumInARange').html('The sum of the range from ' + num2 + ' to ' + num1 + ' is: ' + sumAll([num1,num2]));
    }
  });
