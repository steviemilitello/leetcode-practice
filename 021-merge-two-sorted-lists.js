/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 const mergeTwoLists = (list1, list2) => {
    // first we need to create our dummy node
      const dummy = new ListNode(-Infinity)
      // then we need create our previous pointer
      // we want a reference to the dummy node to return it
      let prev = dummy
      // we need to iterate through list1 and list2
      while(list1 && list2){
          // if the value of list1 is greater than or equal to list2 
          if(list1.val <= list2.val) {
              prev.next = list1
              prev = list1 
              list1 = list1.next
          } else {
              prev.next = list2
              prev = list2
              list2 = list2.next
          }
      }
      
      
      // we need to connect list1 or list2 at the end after the while loop is finished
      if(!list1) prev.next = list2
      if(!list2) prev.next = list1
      
      return dummy.next
  }