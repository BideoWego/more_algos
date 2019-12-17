/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if (x.toString().length <= 1) {
		return true;
	}
	if (x < 0) {
		return false;
	}
	var str = x.toString();
	var mid = Math.floor(str.length / 2);
	var maxLeft = mid;
	var i = 0;
	var j = str.length - 1;
	while (i < maxLeft) {
		var left = str[i];
		var right = str[j];
		if (left !== right) {
			return false;
		}
		i++;
		j--;
	}
	return true;
};


var testCases = [
	[1441, true],
	[1234, false],
	[121, true],
	[-121, false],
	[10, false]
];

testCases.forEach(([testCase, expected]) => {
	var result = isPalindrome(testCase);
	console.log(`
		\r${ expected === result ? 'PASSED' : 'FAILED' }
		\rTest case: ${ testCase }
		\rExpected: ${ expected }
		\rGot: ${ result }
	`);
});
