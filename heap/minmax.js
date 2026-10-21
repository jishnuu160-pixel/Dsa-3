function heapDown(arr,n,i,isMin){
  let best=i;
  let left=2*i+1;
  let right=2*i+2;

  if(left<n && isMin? arr[left]<arr[best]:arr[left]>arr[best]){
    best=left;
  }

   if(right<n && isMin? arr[right]<arr[best]:arr[right]>arr[best]){
    best=right;
  }
  if(best!==i){
    let temp=arr[i];
    arr[i]=arr[best];
    arr[best]=temp;

    heapDown(arr,n,best,isMin);
  }
}


function buildHeap(arr,isMin){
  let n=Math.floor(arr.length/2)-1;

  for(let i=n;i>=0;i--){
    heapDown(arr,arr.length,i,isMin);
  }
  return arr;
}

console.log("minHeap:",buildHeap([40, 10, 30, 50, 20, 60, 15],true));
console.log("maxHeap:",buildHeap([40, 10, 30, 50, 20, 60, 15],false));