function indexOfIgnoreCase(s1, s2) {
  // convert both strings to the same case
  var lowerS1 = s1.toLowerCase();
  var lowerS2 = s2.toLowerCase();

  // find the index of the first occurrence of s2 in s1
  return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
