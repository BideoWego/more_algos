const assert = require('assert');

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const nums = [];
    let median;
    let i = 0;
    let j = 0;
    while (i < nums1.length || j < nums2.length) {
        const a = nums1[i];
        const b = nums2[j];
        if (a !== undefined && (a <= b || b === undefined)) {
            nums.push(a);
            i++;
        }

        if (b !== undefined && (b <= a || a === undefined)) {
            nums.push(b);
            j++;
        }
    }
    const middleIndex = nums.length / 2;
    if (nums.length % 2 === 0) {
        const a = nums[middleIndex - 1];
        const b = nums[middleIndex];
        median = (a + b) / 2;
    } else {
        const flooredMiddleIndex = Math.floor(middleIndex);
        median = nums[flooredMiddleIndex];
    }
    return median;
};


const tests = [
    {
        args: [
            [1, 2],
            [3, 4]
        ],
        expected: 2.5
    },
    {
        args: [
            [1, 3],
            [2]
        ],
        expected: 2
    },
    {
        args: [
            [3],
            [-2, -1]
        ],
        expected: -1
    },
    {
        args: [
            [2],
            []
        ],
        expected: 2
    }
];

tests.forEach((test, index) => {
    const [a, b] = test.args;
    const result = findMedianSortedArrays(a, b);
    console.log(...test.args);
    if (result === test.expected) {
        console.log(`${ result } === ${ test.expected }`);
        return console.log();
    }
    throw `${ result } !== ${ test.expected }`;
});
