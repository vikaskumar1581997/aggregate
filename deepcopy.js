function deepCopy(obj) {
  let copy;
console.log("pass",obj)
  if (obj === null || typeof obj !== "object") {
     console.log("obj1", obj)
    // console.log("copy1", copy)
    return obj;
  }

  if (obj instanceof Array) {
    copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
          console.log("obj2", obj);
      copy[i] = deepCopy(obj[i]);

      // console.log("i1", i)
  
    }
    // console.log("obj2" ,obj)
    // console.log("copy2" ,copy)
    return copy;
  }

  if (obj instanceof Object) {
    copy = {};
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
          console.log("obj3", obj)
        copy[attr] = deepCopy(obj[attr]);
        //console.log("i2", copy[attr]);
      }
    }
    //  console.log("obj3", obj)
    // console.log("copy3", copy)
    return copy;
  }
}

let obj = {
  a: 1,
  b: [1, 2, 3],
  c: {x: 4, y: 5},
  d: function (x) {
    return x + 1;
  },
};
let objCopy = deepCopy(obj);
console.log(objCopy);
