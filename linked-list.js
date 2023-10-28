/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    if (this.head === this.tail) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const val = this.tail.val;
    current.next = null;
    this.tail = current;
    this.length--;
    return val;
  }

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const val = this.head.val;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index is invalid");
    }
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }
  }

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      const removedVal = current.next.val;
      current.next = current.next.next;
      this.length--;
      return removedVal;
    }
  }

  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;



class DoublyNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  push(val) {
    const newNode = new DoublyNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  unshift(val) {
    const newNode = new DoublyNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const val = this.tail.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return val;
  }

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const val = this.head.val;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.length--;
    return val;
  }

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }
    return current.val;
  }

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    let current;
    if (idx < this.length / 2) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }
    current.val = val;
  }

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index is invalid");
    }
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      const newNode = new DoublyNode(val);
      let current;
      if (idx < this.length / 2) {
        current = this.head;
        for (let i = 0; i < idx - 1; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > idx - 1; i--) {
          current = current.prev;
        }
      }
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
      this.length++;
    }
  }

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is invalid");
    }
    if (idx === 0) {
      return this.shift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let current;
      if (idx < this.length / 2) {
        current = this.head;
        for (let i = 0; i < idx; i++) {
          current = current.next;
        }
      } else {
        current = this.tail;
        for (let i = this.length - 1; i > idx; i--) {
          current = current.prev;
        }
      }
      const removedVal = current.val;
      current.prev.next = current.next;
      current.next.prev = current.prev;
      this.length--;
      return removedVal;
    }
  }

  average() {
    if (this.length === 0) {
      return 0;
    }
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = DoublyLinkedList;



function reverseDoublyLinkedList(list) {
  let current = list.head;
  let temp = null;

  while (current !== null) {
    temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    current = temp;
  }

  temp = list.head;
  list.head = list.tail;
  list.tail = temp;
}
const LinkedList = require('./DoublyLinkedList'); 
const myList = new LinkedList([1, 2, 3, 4, 5]);

console.log("Original List:");
console.log(myList.toArray()); 

reverseDoublyLinkedList(myList);

console.log("Reversed List:");
console.log(myList.toArray()); 



function mergeSortedLists(a, b) {
  const mergedList = new LinkedList();
  let currentA = a.head;
  let currentB = b.head;

  while (currentA !== null || currentB !== null) {
    if (currentA === null) {
      mergedList.append(currentB.val);
      currentB = currentB.next;
    } else if (currentB === null) {
      mergedList.append(currentA.val);
      currentA = currentA.next;
    } else {
      if (currentA.val < currentB.val) {
        mergedList.append(currentA.val);
        currentA = currentA.next;
      } else {
        mergedList.append(currentB.val);
        currentB = currentB.next;
      }
    }
  }

  return mergedList;
}

pivot(value) {
  if (!this.head) {
    return; 
  }

  let lessThanList = new LinkedList();
  let greaterThanOrEqualList = new LinkedList();

  let current = this.head;

  while (current) {
    if (current.val < value) {
      lessThanList.push(current.val);
    } else {
      greaterThanOrEqualList.push(current.val);
    }
    current = current.next;
  }

  lessThanList.tail.next = greaterThanOrEqualList.head;

  this.head = lessThanList.head;
  this.tail = greaterThanOrEqualList.tail;

  this.length = lessThanList.length + greaterThanOrEqualList.length;
}


class CircularArray {
  constructor() {
    this.array = [];
    this.start = 0; 
  }

  addItem(item) {
    this.array.push(item);
  }

  rotate(steps) {
    const length = this.array.length;
    if (length === 0) {
      return;
    }
    this.start = (this.start + steps) % length;
    if (this.start < 0) {
      this.start += length;
    }
  }

  getByIndex(index) {
    if (index < 0 || index >= this.array.length) {
      return null;
    }
    const actualIndex = (this.start + index) % this.array.length;
    return this.array[actualIndex];
  }

  printArray() {
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.getByIndex(i));
    }
  }
}

const circ = new CircularArray();
circ.addItem('harry');
circ.addItem('hermione');
circ.addItem('ginny');
circ.addItem('ron');

circ.printArray();

circ.rotate(1);
circ.printArray();

circ.rotate(-1);
circ.printArray();

circ.rotate(-17);
circ.printArray();

circ.rotate(2);
circ.addItem('dobby');
circ.printArray();
