function isPalindrome(word) {
  word = word.replace(/[^a-z0-9]/gi, '').toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }else{
      return true;
    }
  }
}
if (require.main === module) {
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
