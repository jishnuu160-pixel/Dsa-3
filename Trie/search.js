class TrieNode{
  constructor(){
    this.children={};
    this.isEnd=false;
  }
}

class Trie{
  constructor(){
    this.root=new TrieNode();
  }

  insert(word){
    let current=this.root;

    for(let char of word){
      if(!current.children[char]){
        current.children[char]=new TrieNode();
      }
      current=current.children[char];
    }
    current.isEnd=true;
  }

  startsWith(prefix){
    let current=this.root;

    for(let char of prefix){
      if(!current.children[char]){
        return false;
      }
      current=current.children[char];
    }
    return true;
  }
}

let trie=new Trie();

trie.insert("apple");
trie.insert("application");
trie.insert("banana");

console.log(trie.startsWith("app"));
console.log(trie.startsWith("ban"));
console.log(trie.startsWith("cat"));