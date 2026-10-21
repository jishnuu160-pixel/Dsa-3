
let graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A"],
    D: ["B"]
};

function bfs(start){
  let queue=[start];
  let visited={};
  let i=0;

  visited[start]=true;

  while(i<queue.length){
    let current=queue[i];

    console.log(current);
    i++;

    for(let next of graph[current]){
      if(!visited[next]){
        visited[next]=true;
        queue[queue.length]=next;
      }
    }
  }
}

bfs("A");