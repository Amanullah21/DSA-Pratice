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

  deleteNodeFromPos(position) {
    let temp = this.head;
    if (this.head == null) {
      return null;
    }
    if (position == 0) {
      this.head = this.head.next;
      return this.head;
    }
    let size = 1;
    while (temp !== null) {
      if (size == position) {
        temp.next = temp.next.next;
        break;
      }
      size++;
      temp = temp.next;
    }
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
ll.addToHead(5);
ll.addToHead(4);
ll.addToHead(1);
ll.print();

ll.addToTail(10);
ll.addToTail(4);
ll.print();

ll.addToPosition(2, 2);
ll.print();

ll.deleteNodeFromPos(4);
ll.deleteNodeFromPos(2);
ll.print();
