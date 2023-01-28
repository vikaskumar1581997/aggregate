// function my(data){
//     for(i=0;i<data.length;i++){
//        console.log(data, "data");
//        setTimeout(() => {
//          console.log(data, i);
//        }, 0);
//        console.log("hdfvbjh");
//     }

const { set } = require("mongoose");

    
// }

// my("ghj")



// function doSetTimeout(i) {
//   setTimeout(function () {
//     console.log(i);
//   }, i*100);
// }

// for (var i = 1; i <= 2; ++i) doSetTimeout(i);

// let moveBy=()=>{
// for (var i = 1; i <= 2; ++i){
//   setTimeout(function () {
//     console.log(i);
//   }, i * 100);
// }
// }

// moveBy();


//   //============================================

//   new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000); // (*)
//   })
//     .then(function (result) {
//       // (**)

//       console.log(result); // 1
//       return result * 2;
//     })
//     .catch(function (result) {
//       // (**)

//       console.log(result, "cat");

//       return result * 2;
//     })
//     .then(function (result) {
//       // (***)

//       console.log(result); // 2
//       return result * 2;
//     })
//     .then(function (result) {
//       console.log(result); // 4
//       return result * 2;
//     });


//   //







//  const my=()=>{}

//  console.log(typeof(my))



 let  firstName = "Johnabc";
//  var c = this;
//  console.log(c);
 // function my(){
 //   firstName="Johnhj"

//  function func() {
//     var firstName = "John";

//    console.log(this);
//    console.log(firstName, "ghxcfxdfjbhj");
//  }
//  func();
// }

// my()


//  var myVar = 100;


// function WhoIsThis() {
//    var myVar = 200;

//   console.log("myVar = " + myVar); // 200
//   console.log("this.myVar = " + this.myVar); // 100
// }

// WhoIsThis();


// let input=["geeksforgeeks", "beeks", "geek", "gz","d"];
// let size = input.length
// input.sort()
//  let end = Math.min(input[0].length, input[size - 1].length);
// console.log(input);

// (function () {
//   console.log( this);
// }.call(10));

// str="dhvshav"
// console.log(...str)


// String.prototype.giveAyushPizza = () => {
//   return ;
// };

// const name1 = [2,5,4,7,8,9];

// const res=name1.giveAyushPizza();
// console.log(res)

// const r=name1.splice(1,3,89)
// console.log("r",r)
// console.log("r", name1);


// const arrTest = [10, 20, 30, 40, 50][(1,2)];
// console.log(arrTest);


// p = [1, 2, 3]; 
// q = [1, 3, 4];
// r = [...p, ...q];
// console.log([5]+[]);


// const person = {
//   name: "Ayush Verma",
//   0.25e2: 25,
// };


// console.log(person)
// console.log(person[25]);
// console.log(person[0.25e2]);
// console.log(person[".25e2"]);


// console.log( new Array(3).toString());

// const str5=new String("dcb")
// console.log(str5)

// const shape = {
//   radius: 10,
//   diameter(d) {
//     return this.radius * 2*d;
//   },
//   perimeter(){ 
//     let d=() => 2 * Math.PI * this.radius;
//     return d()
//   }
// };

// const shape1 = { radius: 6 };
// console.log(shape.diameter(2));
// console.log(shape.diameter.call(shape1,4));
// console.log(shape.perimeter());


// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () =>this.firstName;
//     return arrow();
//   },
// };

// console.log(user.sayHi());


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Person("Ayush", "Verma");
// Person.getFullName = function () {
//   return `${this.firstName} ${this.lastName} `;
// };

// console.log(member.getFullName());



// const person = { name: "Ayush" };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


// let obj = {
//   x: 2,
//   getX: function () {
//     console.log(this.x);
//   },
// };
// obj.getX();

// var x = 5;
// let obj = {
//   x: 2,
//   getX: () => {
//     console.log(this.x);
//   },
// };
// obj.getX();

//   x = 5;
// let obj = {
//   x: 2,
//   getX: function () {
//     x = 10;
//     console.log(this.x);
//   },
// };
//  obj.getX();
// // console.log(y());


(async () => {
  let url =
    "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
  let response = await fetch(url);

  let commits = await response.json(); // read response body and parse as JSON

  console.log(commits);
})();