// arr=[1,2]
// arr.push(3)
// console.log(arr)

// arr=[12,78]
// arr.unshift(1)
// console.log(arr)

// arr=[]
// arr.push(1)
// console.log(arr);
// arr.unshift(2)
// console.log(arr)
// arr.pop(1)
// console.log(arr)

//===================bubble sort============

ar = [5, 6, 3, 4, 3, 5, 6, 1];

// function bubble(ar) {
//   for (i = 0; i < ar.length - 1; i++) {
//     swap = false;
//     for (j = 0; j < ar.length - 1; j++) {
//       if (ar[j] > ar[j + 1]) {
//         temp = ar[j];
//         ar[j] = ar[j + 1];
//         ar[j + 1] = temp;
//         swap = true;
//       }
//     }
//   }
//   return ar;
// }
// const res = bubble(ar);
// console.log(res);

//=============insertion sort=======
function insertion(ar) {
  for (i = 0; i < ar.length - 1; i++) {
    for (j = i + 1; j > 0; j--) {
      if (ar[j] <ar[j - 1]) {
        temp = ar[j];
        ar[j] = ar[j - 1];
        ar[j - 1] = temp;
      }
    }
  }
  return ar;
}
const res2 = insertion(ar);
console.log(res2, "insertion");


//==================merge sort========
