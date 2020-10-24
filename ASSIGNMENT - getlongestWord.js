/*
This function gets the longest word from a sentence
An assumption is made that the minimum number of words is 2
And the least number number of char is 1
*/
function getLongestWord(sentence) {
  //check if the sentence contains strings
  if (typeof sentence !== "string") {
    console.log("Error");
  } else {
    //split sentence to get array of words
    let arrOfWords = sentence.split(" ");
    //check for minimum number of words not less than 2
    if (arrOfWords.length < 2) {
      return "The sentence has less than 2 words";
    }
    //for a sentence with two or more words do the following
    else {
      let longestWord = "";
      let indexOfLongestWord = undefined;
      //go over each word of the sentence
      for (let word of arrOfWords) {
        if (word.length > longestWord.length) {
          longestWord = word;
          indexOfLongestWord = sentence.indexOf(longestWord);
        }
      }
      return { longestWord, indexOfLongestWord };
    }
  }
}

console.log(getLongestWord("It is raining heavily in Sabon-Gari"));
