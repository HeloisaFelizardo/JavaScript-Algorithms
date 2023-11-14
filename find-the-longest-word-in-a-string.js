function findLongestWordLength(str) {
  return str.split(' ').reduce((longest, word) => Math.max(longest, word.length), 0)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");