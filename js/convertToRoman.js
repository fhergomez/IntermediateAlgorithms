function convertToRoman(num) {
  // Create an empty string
  var romanNumeral = ""
  // Create an Array of roman numerals up to 1000
  var romanNumerals = ['<span style="text-decoration: overline;">C</span>','<span style="text-decoration: overline;">X</span><span style="text-decoration: overline;">C</span>','<span style="text-decoration: overline;">L</span>','<span style="text-decoration: overline;">X</span><span style="text-decoration: overline;">L</span>','<span style="text-decoration: overline;">X</span>','M<span style="text-decoration: overline;">X</span>', '<span style="text-decoration: overline;">V</span>', 'C<span style="text-decoration: overline;">V</span>','M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  // Create an Array of possible number values
  var numbers = [100000, 90000, 50000, 40000, 10000, 9000, 5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // Iterate throught the length of the numbers array
  for (var i = 0; i < numbers.length;i++) {
    // While original number is larger or equal than our inputed numbers
    while (num >= numbers[i]) {
      romanNumeral += romanNumerals[i];
      num -= numbers[i];
    }
  }

 return romanNumeral;
}

$('.number').on('focus', function () {
  $(this).val('').css('color','black');
});

$('.convert').on('click', function (e) {
  var preventDefault = e.preventDefault();
  var num = $('.number').val();
  // console.log(num);
  if (isNaN(num) || num === '') {
    $('.number').val('Give me a real number').css('color','red');
    return preventDefault;
  } else {
    $('#convertToRoman').html('The number ' + num + ' converted to Roman Numeral is: ' + convertToRoman(num));
  }
});
