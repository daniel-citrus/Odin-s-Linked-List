import { LinkedList } from './linked_list.js';

const list = new LinkedList([1, 44, 4654, 16565.654]);
list.append(6845);
list.prepend('Daniel');

console.log(list.toString());
