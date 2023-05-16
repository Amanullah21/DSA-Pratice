class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}


class linkList {
    constructor() {
        this.head = null
    }
    addTohead(data) {
        let node = new Node(data)
        node.next = this.head
        this.head = node
    }

    reverseLL() {
        let current = this.head
        let prev = null
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head= prev
    }
    print() {
        let ans = ""
        let current = this.head
        while (current) {
            ans += current.data + " "
            current = current.next
        }
        console.log(ans)
    }
}

const ll = new linkList()
ll.addTohead(8)
ll.addTohead(7)
ll.addTohead(6)
ll.print()
ll.reverseLL()
ll.print()