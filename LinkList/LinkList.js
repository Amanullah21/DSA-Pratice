class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
  }

  //add data at this.head
  addToHead(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return this.head;
    }
    node.next = this.head;
    this.head = node;
  }

  //adding data at tail
  addToTail(data) {
    let node = new Node(data);
    if (this.head == null) {
      this.head = node;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return this.head;
  }

// addng to position 
  addToPosition(data, pos) {
    const node = new Node(data);
    if (!this.head) {
      this.head = data;
      return this.head;
    }

    if (pos == 0) {
      node.next = this.head;
      this.head = node;
      return node;
    }

    let current = this.head;
    let count = 1;
    while (count != pos) {
      count++;
      current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return this.head;
  }

  // delating from head
  deleteToHead() {
    this.head = this.head.next;
    return this.head;
  }

  // delete data from tail
  deleteToTail() {
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
    while (current) {
      ans += current.data + " ";
      current = current.next;
    }
    console.log(ans);
  }
}

const ll = new LinkList();
ll.addToHead(1);
ll.addToHead(2);
ll.print();
