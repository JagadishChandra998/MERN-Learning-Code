// class Node{
//     constructor(data){
//         this.data =data;
//         this.next =null;
//     }

// }

// const Node1 =new Node(10);
// const Node2 =new Node(20);
// const Node3 =new Node(30);

// Node1.next =Node2;
// Node2.next =Node3;

// console.log(Node1.data);
// console.log(Node1.next.data);

//Operation on Linked list

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
// }
// isEmpty(){
//     return this.head === null;

// }

// append(Data) {
//     let node = new Node(Data);
//     if (!this.isEmpty) {
//         this.head = node;
//     } else {
//         let current = this.head;

//         while (current.next) current = current.next;
//         current.next = current;
//     }
//     this.size++
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        let newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newnode;
    }
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.value + "->";
            current = current.next;
        }
        console.log(result + "null");
    }
    delete(value) {
        if (!this.head) {
            console.log("list is empty no element to delete");
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        let prev = null;
        let current = this.head;
        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }
        if (!current) {
            console.log("value is not found in list");
            return;
        }
        prev.next = current.next;
    }
}
let list = new LinkedList();
list.append(10);
list.append(20);
// list.append(30);
// list.delete(20);
list.printList();