class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }

  enQueue(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  deQueue() {
    if (this.head == null) {
      return this.head;
    }
    let current = this.head;
    while (current.next.next && current.next) {
      current = current.next;
    }
    current.next = current.next.next;
    return this.head;
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
  
}

let queue = new Queue();
queue.deQueue()
