let arr = [7, 10, 4, 3, 20, 15];
let k = 3;

function heapDown(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapDown(arr, n, largest);
    }
}

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapDown(arr, arr.length, i);
    }
}

function kthLargest(arr, k) {
    buildMaxHeap(arr);

    for (let i = 1; i < k; i++) {
        arr[0] = arr[arr.length - 1];
        arr.length--;

        heapDown(arr, arr.length, 0);
    }

    return arr[0];
}

console.log(kthLargest(arr, k));