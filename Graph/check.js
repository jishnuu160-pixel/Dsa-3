class Graph{
  constructor(){
    this.adj={};
  }

  addVertex(vertex){
    if(!this.adj[vertex]){
      this.adj[vertex]=[];
    }
  }

  addEdge(v1,v2){
    this.adj[v1].push(v2);
    this.adj[v2].push(v1);
  }

  isConnected(v1,v2){
    return this.adj[v1].includes(v2);
  }
}

let graph=new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A","B");
graph.addEdge("B","C");

console.log(graph.isConnected("A", "B"));
console.log(graph.isConnected("A", "C"));