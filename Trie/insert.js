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

  search(word){
    let current=this.root;

    for(let char of word){
      if(!current.children[char]){
        return false;
      }
      current=current.children[char];
    }
    return current.isEnd;
  }
}

let trie=new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("dog");


console.log(trie.search("cat"));
console.log(trie.search("car"));
console.log(trie.search("cap"));