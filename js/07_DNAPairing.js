function pair (str) {
  str = str.toUpperCase();
  str = str.split("");
  var placeHolderArray = [];

  for (var i=0;i < str.length;i++) {
    if (str[i] == "G") {
      placeHolderArray.push(["G","C"]);
    } else if (str[i] == "C") {
      placeHolderArray.push(["C","G"]);
    } else if (str[i] == "A") {
      placeHolderArray.push(["A","T"]);
    } else if (str[i] == "T") {
      placeHolderArray.push(["T","A"]);
    }
  }
  str = placeHolderArray;
  return str;
}

pair("C")