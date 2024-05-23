import { Node } from './node.js';

export class LinkedList {
    constructor(value = null) {
        this.head = new Node(value);
        this.tail = this.head;
    }

    append(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
    }

    prepend(value) {
        let temp = new Node(value, this.head);
        this.head = temp;
    }

    toString() {
        let ptr = this.head;
        let result = '';

        while (ptr) {
            result += `(${ptr.value}) -> `;
            ptr = ptr.next;
        }

        result += 'null';
        return result;
    }
}
