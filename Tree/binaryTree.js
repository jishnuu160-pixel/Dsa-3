class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

const root=new Node(10);

root.left=new Node(14);
root.right=new Node(16);

root.left.left=new Node(7);
root.left.right=new Node(9);


console.log("Root:",root.value);
console.log("Left of root:",root.left.value);
console.log("Root of root:",root.right.value);

console.log("Left of 14:",root.left.left.value);
console.log("Right of 14:",root.left.right.value);
