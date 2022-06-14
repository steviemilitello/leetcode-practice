/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 const l1 = [2,4,3]
 const l2 = [5,6,4]
 
 // edge cases
 // 1. if the linked list are different lengths
 // 2. if is greater than 9, we need to carry a 1
 // 3. if the result is longer than any of the numbers
 
 const addTwoNumbers = (l1, l2) => {
     // define variables of the carry
     let carry = 0
     // the previous node needs to point to our current node
     let previousNode = new ListNode()
     // define the headNode so we do not lose the the node on next iteration
     const headNode = previousNode
     // we want to iternate while both are not null or the carry is not 0
     while(l1 || l2 || carry) {
         // define variables of the values
         let value1 = 0
         let value2 = 0
         if (l1) {
             // if l1 is not null, set the value to value1
             value1 = l1.val
             // if l1 is not null, go to the next node
             l1 = l1.next
         }
         if (l2) {
             // if l2 is not null, set the value to value2
             value2 = l2.val
             // if l2 is not null, go to the next node
             l2 = l2.next
         }
         // get the sum of value1 and value2 with carry
         let sum = value1 + value2 + carry
         // if the sum of the numbers is greater than 0 the carry will be a 1
         // otherwise it will be 0
         carry = Math.floor(sum / 10)
         const digit = sum % 10
         // console.log(`the sum is ${value1} + ${value2} = ${valueSum}`)
         // return a linked list
         const currentNode = new ListNode(digit)
         // chain nodes together by setting value of previous node to current node
         previousNode.next = currentNode 
         // we need to update previousNode to be updated to currentNode next
         previousNode = currentNode
     }
     // we want to return the linked list
     return headNode.next
 }