let graph = [
    [1, 2],
    [0, 3, 4],
    [0, 4],
    [1, 5],
    [1, 2],
    [3]
];

let visited = [];

for (let i = 0; i < graph.length; i++) {
    visited[i] = false;
}

function DFS(vertex) {
    visited[vertex] = true;

    console.log(vertex);

    for (let i = 0; i < graph[vertex].length; i++) {
        let neighbor = graph[vertex][i];

        if (visited[neighbor] === false) {
            DFS(neighbor);
        }
    }
}

DFS(0);