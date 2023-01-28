const async = require("async");

var stack = [];
var f1 = function (allback) {
  //do loguic
  //console.log("dfjsj")
  allback(null,"jfhtd");
};
var f2 = function (allback) {
  //do loguic
//   console.log("dfjwesj");
  allback(null, "sec Function result");
};
var f3 = function (allback) {
  //do loguic
  //console.log("dfjdssj");
 allback(null, "third Function result");
};
stack.push(f1)
stack.push(f2);
stack.push(f3);

async.parallel(stack,function (err,result) {
    console.log(result,"btfft");

})

// async.parallel({
//     one: function(callback) {
//         setTimeout(function() {
//             //console.log("200")
//             callback("erru", 1);
//         }, 200);
//     },
//     two: function(callback) {
//         setTimeout(function() {
//              //console.log("100");
//             callback(null, 2);
//         }, 100);
//     }
// }).then(results => {
//     console.log(results);
//     // results is equal to: { one: 1, two: 2 }
// }).catch(err => {
//     console.log(err);
// });

// async () => {
//   try {
//     let results = await async.parallel({
//       one: function (callback) {
//         setTimeout(function () {
//           callback(null, 1);
//         }, 200);
//       },
//       two: function (callback) {
//         setTimeout(function () {
//           callback(null, 2);
//         }, 100);
//       },
//     });
//     console.log(results);
//     // results is equal to: { one: 1, two: 2 }
//   } catch (err) {
//     console.log(err);
//   }
// };

// async.series(
//   [
//     function (callback) {
//       setTimeout(function () {
//         callback(null, "one");
//       }, 2000);
//     },
//     function (callback) {
//       setTimeout(function () {
//         callback("null", "two");
//       }, 100);
//     },
//   ],
//   function (err, results) {
//     console.log(results);
//     // results is equal to ['one','two'] even though
//     // the second function had a shorter timeout.
//   }
// );


//  let current_time_date = new Date(Date.now());
//  let day_middle_time = (current_time_date.setHours(0, 0, 0, 0));

//  console.log(day_middle_time)
//  console.log(current_time_date);