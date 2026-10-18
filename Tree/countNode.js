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

function countNode(root){
  if(root === null){
    return 0;
  }
   return 1 + countNode(root.left)+ countNode(root.right);
}

console.log(countNode(root));