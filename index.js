/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var prefix = "";

	if (!strs.length) {
		return prefix;
	}

	var strA = strs[0];
	for (var i = 0; i < strA.length; i++) {
		var charA = strA[i];
		var matches = 1;
		for (var j = 1; j < strs.length; j++) {
			var strB = strs[j];
			var charB = strB[i];
			if (charA === charB) {
				matches++;
			} else {
				break;
			}
		}
		if (matches === strs.length) {
			prefix += charA;
		} else {
			break;
		}
	}

	return prefix;
};


var testCases = [
	[["flower","flow","flight"], "fl"],
	[["dog","racecar","car"], ""],
	[["aca","cba"], ""]
];

testCases.forEach(([testCase, expected]) => {
	var result = longestCommonPrefix(testCase);
	console.log(`
		\r${ expected === result ? 'PASSED' : 'FAILED' }
		\rTest case: ${ testCase }
		\rExpected: ${ expected }
		\rGot: ${ result }
	`);
});

