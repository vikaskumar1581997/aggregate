let binary=function(arr,x){
    let start=0,end=arr.length-1;

while(start<=end){
    let mid=Math.floor((start+end)/2)
    if(mid==x) return true

    else if(arr[mid]<x){
        start=mid+1
    }
    else{
        end=mid-1;
    }
   

}
return false
}

arr=[1,2,3,4,5]
let res=binary(arr,2)
console.log(res)

let n=5;

function fib(n){
    if(n<=1) return n
  
    return fib(n-1)+fib(n-2)

} 
let res1=fib(n);
console.log(res1)


let arr1=[];

for(i=0;i<arr1.length;i++){
    
}

he has give his 6 month day and night and when there is palcement time why will he leave 
when he is having family burden  and everything you need to support message him what is the problee bcoz somtime people dont want to talk when depresssed