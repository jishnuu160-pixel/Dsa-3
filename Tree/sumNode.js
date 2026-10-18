class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const root=new Node(20);
root.left=new Node(15);
root.right=new Node(18);

root.left.left=new Node(8);
root.left.right=new Node(10);

function sumNode(root){
  if(root === null){
    return 0;
  }

  return root.value + sumNode(root.left)+ sumNode(root.right);
}

console.log(sumNode(root));