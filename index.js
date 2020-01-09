// https://leetcode.com/problems/valid-parentheses/

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if ((typeof s === 'string' || s instanceof String) && !s.length) {
        return true;
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    var expecting = [];
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    for (var i = 0; i < s.length; i++) {
        var char = s[i];
        var closer = map[char];
        if (closer) {
            expecting.push(closer);
        } else {
            closer = expecting.pop();
            if (char !== closer) {
                return false;
            }
        }
    }

    if (expecting.length) {
        return false;
    }

    return true;
};




var testCases = [
    ['', true],
    ['[', false],
    ['((', false],
	['()', true],
	['()[]{}', true],
	['(]', false],
	['([)]', false],
	['{[]}', true]
];

testCases.forEach(([testCase, expected]) => {
	var result = isValid(testCase);
	console.log(`
		\r${ expected === result ? 'PASSED' : 'FAILED' }
		\rTest case: ${ testCase }
		\rExpected: ${ expected }
		\rGot: ${ result }
	`);
});


