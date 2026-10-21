function heapDown(arr,n,i){
  let largest=i;
  let left=2*i+1;
  let right=2*i+2;

  if(left<n && arr[left]>arr[largest]){
    largest=left;
  }

  if(right<n && arr[right]>arr[largest]){
    largest=right;
  }

  if(largest!==i){
    let temp=arr[i];
    arr[i]=arr[largest];
    arr[largest]=temp;

    heapDown(arr,n,largest);
  }
}

function heapSort(arr){
  let n=arr.length;

  for(let i=Math.floor(n/2)-1;i>=0;i--){
    heapDown(arr,n,i);
  }

  for(let i=n-1;i>0;i--){
    let temp=arr[0];
    arr[0]=arr[i];
    arr[i]=temp;

    heapDown(arr,i,0);
  }
  return arr;
}

console.log(heapSort([40, 10, 30, 50, 20]));