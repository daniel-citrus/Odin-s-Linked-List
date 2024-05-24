import { Node } from './node.js';

export class LinkedList {
    constructor(value = null) {
        if (Array.isArray(value)) {
            value = [...value];
        } else {
            value = [value];
        }

        this.#head = new Node();
        this.#tail = this.head;
        this.#size = 0;

        value.forEach((element) => {
            this.append(element);
        });

        this.#head = this.head.next;
    }

    append(value) {
        this.tail.next = new Node(value);
        this.#tail = this.tail.next;
        this.#size = this.size + 1;
    }

    prepend(value) {
        let temp = new Node(value, this.head);
        this.#head = temp;
        this.#size = this.size + 1;
    }

    get size() {
        return this.length;
    }

    set #size(newLength) {
        this.length = newLength;
    }

    get head() {
        return this.headNode;
    }

    set #head(newHead) {
        this.headNode = newHead;
    }

    get tail() {
        return this.tailNode;
    }

    set #tail(newTail) {
        this.tailNode = newTail;
    }

    at(index) {
        if (index >= this.size) {
            return null;
        }

        let ptr = this.head;

        for (let i = 0; i < index; i++) {
            ptr = ptr.next;
        }

        return ptr;
    }

    pop() {
        if (!this.size) {
            return false;
        }

        if (this.size === 1) {
            this.#head = null;
            this.#size = 0;
            return true;
        }

        let ptr = this.head;

        while (ptr.next.next) {
            ptr = ptr.next;
        }

        this.#tail = ptr;
        this.tail.next = null;
        this.#size = this.size - 1;
        return true;
    }

    contains(value) {
        if (!this.size) {
            return false;
        }

        let ptr = this.head;

        while (ptr) {
            if (ptr.value === value) {
                return true;
            }

            ptr = ptr.next;
        }

        return false;
    }

    find(value) {
        if (!this.size) {
            return false;
        }

        let ptr = this.head;
        let index = 0;

        while (ptr) {
            if (ptr.value === value) {
                return index;
            }

            ptr = ptr.next;
            index++;
        }

        return null;
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

    insertAt(value, index) {
        if (index >= this.size) {
            return;
        }

        let ptr = this.head;

        for (let i = 0; i < index - 1; i++) {
            ptr = ptr.next;
        }
    }

    removeAt(index) {

    }
