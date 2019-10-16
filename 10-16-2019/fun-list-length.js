function length(head) {
  let ptr = head;
  let length = 0;
  while (ptr != null) {
    ptr = ptr.next;
    length++;
  }
  return length;
}

console.log(length(null), 0);
console.log(length(listFromArray([1, 2, 3, 4])), 4);
