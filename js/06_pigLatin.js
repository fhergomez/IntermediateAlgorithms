function translatePigLatin (str) {
  var letters = str.split("");
  var vowelRegex = /[aeiou]/;
  if (vowelRegex.test(letters[0])) {
    console.log(letters.join("") + "way");
    return letters.join("") + "way";
  }

  while(true) {
    if (!vowelRegex.test(letters[0])) {
      letters.push(letters.splice(0,1));
    } else {
      break;
    }
  }
  str = letters.join("") + "ay";
  return str;
}

(translatePigLatin("consonant"));