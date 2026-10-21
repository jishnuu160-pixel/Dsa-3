let graph = [
    [1],
    [0, 2],
    [1],
    [4],
    [3],
    [6],
    [5]
];

let visited = [];

for (let i = 0; i < graph.length; i++) {
    visited[i] = false;
}

function DFS(vertex) {
    visited[vertex] = true;

    for (let i = 0; i < graph[vertex].length; i++) {
        let neighbor = graph[vertex][i];

        if (visited[neighbor] === false) {
            DFS(neighbor);
        }
    }
}

let count = 0;

for (let i = 0; i < graph.length; i++) {
    if (visited[i] === false) {
        count++;
        DFS(i);
    }
}

console.log(count);