class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }
  push(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  pop() {
    if (this.head == null) return "Empty!";
    this.head = this.head.next;
  }
  

  print() {
    let current = this.head;
    let ans = "";
    if (this.head == null) console.log("It is Empty");
    else {
      while (current) {
        ans += current.data + " ";
        current = current.next;
      }
    }
    console.log(ans);
  }
//   top() {
//     if (this.head == null) {
//       console.log("IT is Empty");
//       return;
//     }
//     console.log(this.head.top);
//   }
}

let stack = new Stack();
stack.push(3);
stack.push(5);
stack.print();
stack.pop();
stack.print();

