arr=[7,4,6,1,45,4]

const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];


//===========map(new array,doesn't change orig.)=======
const res=persons.map((item)=>{
    return [item.firstname, item.lastname].join(" ")
})

console.log(res.join(" "))


//===========filter(new array,doesn't change orig.)=======

const res1=arr.filter((x)=>{
    return x>18
})
console.log(res1)

//===========FIND (not cahnge org.,RETURN VALUE OF FIRST ELEMENT THAT PASSES THE TEST)

//============reduce(accumulated result,not change org. array)=======

const res2=arr.reduce((accu,cvalue)=>{
return accu+cvalue
},0)

console.log(res2)







