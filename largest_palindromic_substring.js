/**
 * Returns true if the string is a palindrome, false if not
 * @param {*} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  const middle = str.length % 2 === 0 ? 0 : 1;
  while (j - i > middle) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
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

  for (let i = s.length; i >= 2; i--) {
    for (let j = 0; j + i <= s.length; j++) {
      const str = s.substring(j, j + i);
      if (isPalindrome(str)) {
        return str;
      }
    }
  }

  return s[0];
};

const tests = [
  'babad',
  'cbbd',
  'a',
  '',
  'aa',
  'aba',
  'cecec',
  'ac',
  'abb',
  'ccd',
  'abcdefg'
];

tests.forEach(str => {
  console.log(`str === '${ str }'`);
  console.log(`'${ longestPalindrome(str) }'`);
  console.log();
});

// str === 'babad'
//=> 'bab'

// str === 'cbbd'
//=> 'bb'

// str === 'a'
//=> 'a'

// str === ''
//=> ''

// str === 'aa'
//=> 'aa'

// str === 'aba'
//=> 'aba'

// str === 'cecec'
//=> 'cecec'

// str === 'ac'
//=> 'a'

// str === 'abb'
//=> 'bb'

// str === 'ccd'
//=> 'cc'

// str === 'abcdefg'
//=> 'a'

