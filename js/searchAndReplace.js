function myReplace(str, before, after) {

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    str = str.replace(before, after.charAt(0).upperCase(0) + after.slice(1));
  } esle {
    str = str.replace(before,after);
  }
  return str;

}

console.log(myReplace("I would like to play football", "like", "love"));