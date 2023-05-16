class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = null
    }
}

class linkList {
    constructor() {
        this.head = null
    }

    addToHead(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
            return this.head
        }
        node.next = this.head
        this.head = node
    }

    addToTail(data) {
        let node = new Node(data)
        if (this.head == null) {
            this.head = node
            return this.head
        }
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node
        return this.head
    }

    addToPosition(data, position) {
        let node = new Node(data)
        if (position == 0) {
            node.next = head
            head = node
            return this.head
        }
        let current = this.head
        let index = 1
        while (current) {
            if (index == position) {
                node.next = current.next
                current.next = node
                return this.head
            }
            current = current.next
            index++
        }
        return this.head
    }



    removeFromHead() {
        this.head = this.head.next
    }
    removeFromTail() {
        let current = this.head
        if (this.head == null) {
            return null
        }
        while (current.next.next && current.next) {
            current = current.next
        }
        current.next = current.next.next
        return this.head
    }

    deleteToPosition(position) {
        if (position == 0) {
            this.head = this.head.next
        }
        let current = this.head
        let index = 1
        while (current) {
            if (index == position) {
                current.next = current.next.next
            }
            current = current.next
            index++
        }
        return this.head
    }

    print() {
        let current = this.head
        let ans = ''
        if (this.head == null) {
            console.log("empty linklist")
        }
        while (current) {
            ans += current.data + " "
            current = current.next
        }
        console.log(ans)
    }


}

let ll = new linkList()
ll.addToHead(8)
ll.addToHead(7)
ll.addToHead(6)
ll.addToTail(11)
ll.addToTail(12)
ll.addToTail(13)
ll.print()
ll.deleteToPosition(1)
ll.print()
