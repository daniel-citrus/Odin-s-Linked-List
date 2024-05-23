export class Node {
    /**
     * Create a new node with given value. Point next to given next.
     * @param {*} value
     * @param {*} next
     */
    constructor(value = null, next = null) {
        this.value = value;
        this.next =  next;
    }
}
