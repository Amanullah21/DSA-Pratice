// oj 
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};



var addOneToLinkedList = function(head) {
    head = reverse(head)
    let current = head;
    let temp , pre=null
    let carry = 1, sum ;
    while(current){
       sum = carry + current.data
       if(sum>= 10){
           carry =1
       }else{
           carry =0
       }
       sum = sum % 10
       current.data =sum;
       temp =current;
       current = current.next
    }
       if(carry>0){
           temp.next = new LinkedListNode(1)
       }
       return reverse(head)

}


    function reverse(head){
        let cur = head;
        let pre=null;
        while(cur){
            let next = cur.next;
            cur.next = pre;
            pre = cur;
            cur= next
        }
        return pre
    }

