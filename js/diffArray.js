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



$('.submit').on('click', function (e) {
  e.preventDefault();
  var arr1 = $('.arr1').val();
  var arr2 = $('.arr2').val();

  $('#diffArray').html('The difference on both arrays is: ' + diffArray(arr1,arr2));
});