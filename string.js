//==================remove duplicates===================

const str1 = "i have have a mango mango that is is tasty.";

const inputstr = str1.split(" ");
obj = {};
function removeduplicates(inputstr) {
  for (i = 0; i < inputstr.length; i++) {
    obj[inputstr[i]] = (obj[inputstr[i]] || 0) + 1;
  }
  console.log(obj);
  res = [];
  for (i in obj) {
    // console.log(i)
    res.push(i);
  }
  console.log(res);
}
removeduplicates(inputstr);


//========================palindrome=====

// str="boob"

// function palindrome(str){
//   let length=Math.floor(str.length/2);
//   let start=0;
//   let end=str.length-1
//   //console.log(str[start],end,length)

//   for(i=0;i<length;i++){
//    //console.log(str[start],str[end])
//     if(str[start]===str[end]) {
//       start++;
//       end--;
//       continue
//     }
//     else{
//       return "no"
//     }
//   }
//   return "yes"
//  }

//  const res2=palindrome(str)
// console.log(res2)

//=======================sort letters in string=============================

str2= "neelkanth";
const input = str2.split("");

function sort(input) {
  const res = input.sort();
  console.log(res.join(""));
}
sort(input);


//================================= reverse the string================-===========

// const a="vikas";
// let b=""
// function reverse(a){
// for(i=a.length-1;i>=0;i--){
//      b=b+a[i]
// }
// console.log(b)
// }
//  //reverse(a)

//   //====through rec================

//   const ar="vikas";
//   let br=""
//   function reverse(a){
           
//     if(a.length==1) return a[0] 

//     return reverse(a.substring(1)) +a[0]
   

//   }
//   //let res1=reverse(ar)
//   //console.log(res1);


//============================SUM =======================================



r="(2)(3)"
sum=0

function sumc(r){
for(const i of r){
 if(i=="(" || i==")"){
  continue
 }
 else{
  sum=sum+Number(i)
 }
}
return sum
}
const qw=sumc(r)
console.log(qw,"qw")

//=============================
O=[1,3,4,56,7,4]

var rew=O.includes(4,-1)
console.log(rew)
