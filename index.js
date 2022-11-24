function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.split("");
  newWord = newWord.reverse();
  newWord = newWord.reduce((prev, curr) => {
    return prev + curr;
  }, "");
  return word === newWord ? true : false;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
