// Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL
// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL
// Note:

// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLinkedList(vals) {
    var head = new ListNode(vals.pop());

    var node = head;
    while (vals.length) {
        var val = vals.pop();
        node.next = new ListNode(val);
        node = node.next;
    }

    return head;
}

function stringifyLinkedList(ll) {
    var str = '';
    var node = ll;
    while (node) {
        str += node.val;
        if (node.next) {
            str += ' -> ';
        }
        node = node.next;
    }
    return str;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    var lastOdd = head;
    var lastEven = head.next;
    var firstEven = lastEven;

    while (lastOdd.next && lastEven.next) {
        lastOdd.next = lastEven.next;
        lastOdd = lastOdd.next;
        lastEven.next = lastOdd.next;
        lastEven = lastEven.next;
    }

    lastOdd.next = firstEven;

    return head;
};


([
    [1, 2, 3, 4, 5],
    [2, 1, 3, 5, 6, 4, 7]
]).forEach(function(array) {
    var ll = createLinkedList(array);
    ll = oddEvenList(ll);
    ll = stringifyLinkedList(ll);
    console.log(ll);
});
