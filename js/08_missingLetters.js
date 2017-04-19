function fearNotLetter(str) {

  var numbers = str.split("").map(function(letters) {
    console.log(letters.charCodeAt());
    return letters.charCodeAt();
  });

  for (var i = 0;i < numbers.length;i++) {
    if (numbers[i+1] - numbers[i] > 1) {
      return String.fromCharCode(numbers[i]+1);
    }
  }

  return undefined;
}

console.log(fearNotLetter("abcdefghiklm"));