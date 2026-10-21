class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}

class BST{
  constructor(){
    this.root=null;
  }

  insert(value){
    this.root=this.insertNode(this.root,value);
  }

  insertNode(node,value){
    if(node === null){
      return new Node(value);
    }

    if(value < node.value){
      node.left=this.insertNode(node.left,value);
    }else if(value > node.value){
      node.right=this.insertNode(node.right,value);
    }
    return node;
  }

  inOrder(node=this.root){
    if(node === null){
      return;
    }

    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  reverse(node=this.root){
    if(node === null) return;

    this.reverse(node.right);
    console.log(node.value);
    this.reverse(node.left);
  }
}

const bst=new BST();

bst.insert(50);
bst.insert(30);
bst.insert(40);
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(7);

console.log("Before");
bst.inOrder();
console.log("After");
bst.reverse();