let graph = [
    [1, 2],
    [0, 3, 4],
    [0, 4],
    [1, 5],
    [1, 2],
    [3]
];

function BFS(start) {
    let visited = [];
    let queue = [];
    let front = 0;

    for (let i = 0; i < graph.length; i++) {
        visited[i] = false;
    }

    visited[start] = true;
    queue[0] = start;

    while (front < queue.length) {
        let current=queue[front];
        front++;

        console.log(current);

        for (let i=0; i<graph[current].length; i++) {
            let neighbor=graph[current][i];

            if (visited[neighbor] === false) {
                visited[neighbor] = true;
                queue[queue.length] = neighbor;
            }
        }
    }
}

BFS(0);