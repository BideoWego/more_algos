// Length of Longest Unique Sub-String
// https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/#

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    console.log('s: "' + s + '"');
    var longest = '';
    for (var i = 0; i < s.length; i++) {
        var current = '';
        for (var j = i; j < s.length; j++) {
            var char = s[j];
            if (current.indexOf(char) >= 0) {
                break;
            } else {
                current += char;
            }
        }
        if (current.length > longest.length) {
            longest = current;
        }
    }
    console.log(longest);
    return longest.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var slidingWindow = function(s) {
    var n = s.length;
    var set = {};
    var ans = 0, i = 0, j = 0;
    while (i < n && j < n) {
        var char = s[j];
        if (!set[char]) {
            var key = s[j];
            set[key] = true;
            j++;
            ans = Math.max(ans, j - i);
        } else {
            var key = s[i];
            delete set[key];
            i++;
        }
    }
    return ans;
};

var strs = [
    ' ',
    'abcabcbb',
    'bbbbb',
    'pwwkew',
    'dvdf'
];
strs.forEach(str => {
    console.log(`'${ lengthOfLongestSubstring(str) }'`);
    console.log(`'${ slidingWindow(str) }'`)
});
