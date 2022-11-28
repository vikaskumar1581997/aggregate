// ===binary search====================

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


// let n=5;

// function fib(n){
//     if(n<=1) return n
  
//     return fib(n-1)+fib(n-2)

// } 
// let res1=fib(n);
// console.log(res1)




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

//====================================

// const jds=(()=>{
// tags={
//     a:"jhkdc",
//     b:"udguiw"
// }

//  for(ele in tags){
//     console.log(ele);
//     console.log(tags[ele])
//  }
// })

// jds()

//==================== ***FIBONACCI**** ====================================

//const a=9;

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

// let result=dpfib(a)
// console.log(result)

//============= reverse the string================

// const a="vikas";
// let b=""
// function reverse(a){
// for(i=a.length-1;i>=0;i--){
//      b=b+a[i]
// }
// console.log(b)
// }
//  //reverse(a)
//   //====through rec===
//   const ar="vikas";
//   let br=""
//   function reverse(a){
           
//     if(a.length==1) return a[0] 

//     return reverse(a.substring(1)) +a[0]
   

//   }
//   //let res1=reverse(ar)
//   //console.log(res1);


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


// //=================
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

//======================


arr=[3,45,67,8,3,45]
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

//========================palindrome=====

str="boob"

function palindrome(str){
  let length=Math.floor(str.length/2);
  let start=0;
  let end=str.length-1
  console.log(str[start],end,length)

  for(i=0;i<length;i++){
   console.log(str[start],str[end])
    if(str[start]===str[end]) {
      start++;
      end--;
      continue
    }
    else{
      return "no"
    }
  }
  return "yes"
 }

 const res2=palindrome(str)
console.log(res2)

//=======================
