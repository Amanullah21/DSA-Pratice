
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    let node  = new ListNode(0)
    let current = node
    
    while(true){
        if(l1 == null){
            current.next = l2
            break;
        }
        if(l2 == null){
            current.next =l1
            break
        }
        if(l1.val <= l2.val){
             current.next=l1
            l1=l1.next
        }else{
            current.next= l2
            l2 = l2.next
        }
        current= current.next
    }
    return node.next
};

