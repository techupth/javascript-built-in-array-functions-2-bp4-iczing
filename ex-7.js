function isPalindrome(string) {
  let cleanString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let reversedString = cleanString.split('').reverse().join('');
  return cleanString === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false