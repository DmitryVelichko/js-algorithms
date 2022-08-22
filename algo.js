import LinkedList from '../linked-list/LinkedList';

export default class Queue {
  constructor() {
    // We're going to implement Queue based on LinkedList since the two
    // structures are quite similar. Namely, they both operate mostly on
    // the elements at the beginning and the end. Compare enqueue/dequeue
    // operations of Queue with append/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return !this.linkedList.head;
  }
