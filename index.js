// https://leetcode.com/problems/merge-two-sorted-lists/


// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function node2str(node) {
    var str = '';
    do {
        str += node.val !== undefined && node.val !== null ? node.val : '';
        if (node.next) {
            str += '->'
        }
        node = node.next;
    } while (node);
    return str;
};

function createLinkedList(values) {
    var ll = ref = new ListNode();
    for (var i = 0; i < values.length; i++) {
        var value = values[i];
        ref.val = value;
        if (i < values.length - 1) {
            ref.next = new ListNode();
            ref = ref.next;
        }
    }
    return ll;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var sorted = new ListNode();
    var ref = sorted;
    var a = l1;
    var b = l2;
    while (a || b) {
        if (a && b) {
            var gt = a.val > b.val ? a : b;
            var lt = a.val > b.val ? b : a;
            ref.next = new ListNode(lt.val);
            ref.next.next = new ListNode(gt.val);
            a = a.next;
            b = b.next;
            ref = ref.next.next;
        } else if (a) {
            ref.next = new ListNode(a.val);
            a = a.next;
            ref = ref.next;
        } else if (b) {
            ref.next = new ListNode(b.val);
            b = b.next;
            ref = ref.next;
        }
    }
    var head = sorted.next;
    sorted = null;
    return head;
};


var testCases = [
    [[createLinkedList([5]), createLinkedList([1, 2, 4])], '1->2->4->5'],
    [[createLinkedList([1, 2, 4]), createLinkedList([1, 3, 4])], '1->1->2->3->4->4']
];

testCases.forEach(([testCase, expected]) => {
    var [a, b] = testCase;
    var result = mergeTwoLists(a, b);
    console.log(`
        \r${ expected === node2str(result) ? 'PASSED' : 'FAILED' }
        \rTest case: ${ testCase }
        \rExpected: ${ expected }
        \rGot: ${ node2str(result) }
    `);
});
