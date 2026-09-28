//for Each
//let arr =[1, 2, 3, 4, 5];
//arr.forEach(function(el){
    //console.log(el);
//});

//let print = function(el){
   // console.log(el);

//}
//arr.forEach(print);

let arr2 = [
 {
    name: "Vijay",
    marks:95,
},

  {
  name: "Ashu",
  marks:98.4,
},

  {
    
  name: "Shubham",
  marks:96.5,

},
];
 arr2.forEach((student) => {
    console.log(student.marks);
});

//Map 
//let num = [1,2, 3, 4, 5];
//let double = num.map(function(el){
//return el*2;
//});
//let double = num.map((el) =>{
//return el*2;
//});

let students = [
 {
    name: "Vijay",
    marks:95,
},

  {
  name: "Ashu",
  marks:98.4,
},

  {
  name: "Shubham",
  marks:96.5,

},
];
let gpa = students.map((el) => {
    return el.marks/10;
});

//Filter
let nums= [2, 4, 1, 5, 6, 2, 7, 8, 9];
//let even = nums.filter((num) =>(num % 2==0));
let even = nums.filter((el) =>{
    return el % 2==0;
});

// Reduce;
let nums2 = [1, 2, 3, 4];
let finalVal= nums2.reduce((res,el) =>{
  console.log(res);
 return res+el;

});
console.log( finalVal);

// Finding maximum in array
let nums3 = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2, 12];
let result= nums3.reduce ((max,el) => {
  if(el>max){
    return el;
  }else{
  return max;
  }
});
console.log(result);
//Practice question1
// Finding min in array
let nums4 = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2, 12];
let result1= nums3.reduce ((min,el) => {
  if(el< min){
    return el;
  }else{
  return min;
  }
});
console.log(result1);
//Practice question2
let arr =[10, 20, 30, 40];
let ans= arr.every((el) => el % 10 == 0);
console.log(ans);

//Default parameters

function sum (a, b=3){
  return a+b;
}
  console.log(sum(2));

  //spread
  let arr3 =[1,2, 3, 4, 5];
  let newArr=[...arr3];

  let chars= [..."hello"];

  const data ={
    email:"ironman@gmail.com",
    password:"abcd",

  }
  const dataCopy ={...data, id: 123};

  //Rest
  function sum(...args){
    return args.reduce((args,el) =>args+el);
  }

  //Destructuring
  let names= ["tony","bruce","steve" ,"peter"];
let [winner,runnerup, ...others]=names;
//console.log(winner,runnerup );
//object
const student ={
  name:"Karan",
  class:9,
  age:14,
  subjects:["hindi","english","math","science","social studies"],
  username:"karan@1234",
  password:1234,

};
const{username:user,password:pas , city="Delhi"} = student;
//console.log(user);