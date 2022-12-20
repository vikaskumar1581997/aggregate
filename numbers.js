// ==============================binary search====================

// let binary=function(arr,x){
//     let start=0,end=arr.length-1;

// while(start<=end){
//     let mid=Math.floor((start+end)/2)
//     if(mid==x) return true

//     else if(arr[mid]<x){
//         start=mid+1
//     }
//     else{
//         end=mid-1;
//     }
   

// }
// return false
// }

// arr=[1,2,3,4,5]
// let res=binary(arr,2)
// console.log(res)


//===============================





//====================================

// var mypromise=(function (time) new Promise(
//     function (res,rej){
//         //setTimeout(res,time)



//         // res()
//         rej()
//     }

// ))

// //mypromise(3000).then(()=>console.log("hello"))
// mypromise().then(()=>console.log("jbfedj"))
//                     .catch(()=>console.log("errkad"))

//==================================string loop ================

// const jds=()=>{
// tags={
//     a:"jhkdc",
//     b:"udguiw"
// }

//  for(ele in tags){
//     console.log(ele);
//     console.log(tags[ele])
//  }
// }

// jds()

//==================== ***FIBONACCI**** ====================================

const num=9;

// function fib(n){
//     if(n<=1){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }
 
// const res=fib(a);
// console.log(res)


// function dpfib(n){
//     let f=new Array(n+2)
//     f[0]=0;
//     f[1]=1;

//     for(let i=2;i<=n;i++){

//         f[i]=f[i-1]+f[i-2];
//     }
//     return f[n]
// }

// let fibres=dpfib(num)
// console.log(fibres);



//   //=======================power============

//   const i=2;
//   const j=-2;
// let k;
//   function power(i,j){
//     if(j==0) return 1  
//     if(j<0){
//          k=i
//         k=1/k
//        j++
//        console.log(i)
//     }
    
//     else{
//         k=i
//     j--
//     }
//     return k*power(i,j)
// }

// let res=power(i,j)
// console.log(res);

//==================================factorial ==============


function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));


// //=======================================
//  //find min distane between  minimum

//  arr=[7,5,1,67,8,45,1,3,1,67]

//  function distance(x){
   
//       //we can do in 2 for loop O(2n)
   

//  }


//  //=======


//  aj={
//   a:"jdjsbbj",
//   h:"djbsjk"
//  }

//  function my(xf){
//   delete aj.h;
//  console.log(aj,"last")
//  }
//  my(aj)

//=============================== duplicates========


// arr=[3,45,67,8,3,45]
str="djgshdcshvadghcsv"
a={}
res=[]

function dup(x){

  for(i=0;i<str.length;i++){
    //let v=arr[i]
   // console.log(a.v,i,v)
    if(a[str[i]]==undefined){
      a[str[i]] = str[i];
    }
    else{
   res.push(str[i])
    }
  }
  return res
}

const result=dup(str.split(""))
console.log(result)
console.log(a)


//===========================================

// arr = [3, 45, 67, 8, 3, 45];

// const res=arr.slice(1,4)
// console.log(res)
// console.log(arr)
// const res1=arr.splice(1,2,89)
// //splice overwrites original Array.
// console.log(arr);


//===========================sorting numbers in array=====================

// arr.sort((a,b)=>{return a-b})
// console.log(arr)

//===============================

