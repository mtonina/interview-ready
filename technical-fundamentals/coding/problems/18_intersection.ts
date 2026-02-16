// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  const map: Map<Node<T>, boolean> = new Map<Node<T>, boolean>();
  const lList1 = new LinkedList(list1);
  lList1.visit((n) => {
    map.set(n, true);
  });
  let p = list2;
  while(p){
    if(map.has(p)) return p;
    p = p.next;
  }

}
