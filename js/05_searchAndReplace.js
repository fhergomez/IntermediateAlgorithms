function myReplace(str, before, after) {

  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    str = str.replace(before, after.charAt(0).toupperCase(0) + after.slice(1));
  } else {
    str = str.replace(before,after);
  }
  return str;

}

console.log(myReplace("I would like to play football", "like", "love"));