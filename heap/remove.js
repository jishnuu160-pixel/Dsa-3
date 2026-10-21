let heap = [10, 20, 15, 30, 40];

function insert(value) {
    heap[heap.length] = value;
    let i = heap.length - 1;

    while (i > 0) {
        let parent = Math.floor((i - 1) / 2);

        if (heap[parent] <= heap[i]) break;

        let temp = heap[parent];
        heap[parent] = heap[i];
        heap[i] = temp;

        i = parent;
    }
}

function remove() {
    if (heap.length === 0) return null;

    let removed = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.length--;

    if (heap.length > 0) {
        heapDown(heap, heap.length, 0, true);
    }

    return removed;
}

function heapDown(arr, n, i, isMin) {
    let best = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] < arr[best]) best = left;
    if (right < n && arr[right] < arr[best]) best = right;

    if (best !== i) {
        let temp = arr[i];
        arr[i] = arr[best];
        arr[best] = temp;
        heapDown(arr, n, best, true);
    }
}

insert(5);
console.log("After insert:", heap);

console.log("Removed:", remove());
console.log("After remove:", heap);