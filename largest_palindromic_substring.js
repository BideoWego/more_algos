/**
 * Returns true if the string is a palindrome, false if not
 * @param {*} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

/**
 * Returns the longest palindromic substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s;
  }

  if (s.length === 2) {
    return s[0] === s[1] ? s : s[0];
  }

  for (let i = s.length - 1; i >= 2; i--) {
    for (let j = 0; j + i < s.length; j++) {
      const str = s.substring(j, i + 1);
      console.log('-', str);
      if (isPalindrome(str)) {
        return str;
      }
    }
  }

  return s[0];
};

const inputs = [
  'babad',
  'cbbd',
  'a',
  '',
  'aa',
  'aba',
  'cecec',
  'ac',
  'abb',
  'ccd'
];

inputs.forEach(str => {
  console.log(longestPalindrome(str));
});
