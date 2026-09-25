//function hello (){
    //console.log("hello")
//}
//hello();

//function rollDice(){
    //let rand= Math.floor(Math.random()* 6) + 1;
    //console.log(rand);

//}
 //rollDice();
  //rollDice();
  // rollDice();
    //rollDice();
     //rollDice();

    //function printInfo(name,age){
       // console.log(` ${name}'s age is ${age}.`);
     //}
      //printInfo("Vijay kharwar", 25);

      //function calAvg(a,b,c){
        //let avg= (a+b+c)/3;
        //console.log(avg);
      //}
       //calAvg(3,4,5);

       //function printTable(n){
        //for(let i=n;i<=n*10;i+=n){
            //console.log(i);
        //}
       //}
       //printTable(5);

       // Practice question 5

       //function getSum(n){
        //let Sum=0;
        //for(let i=1;i<=n;i++){
          //Sum +=i;
        //}
        //return Sum;

       //}

        // Practice question 6
        //let Str=["hi","hello","bye","!"];

      //function Concat(Str){
        //let result="";
      //for(let i=0;i<Str.length;i++){
      //result+=Str[i];
    //}
    //return result;

  //}

  //Function scope;
  //let Sum=54;//Global scope
  //function calSum(a,b){
    //let Sum= a+b; //Function scope
   // console.log(Sum);
 // }
  //calSum(3,6);
   //console.log(Sum);

  // lexical scope;
  //function outerFunc(){
    //let x=5;
    //let y=10;
    //function innerFunc(){
     // console.log(x);
     // console.log(y);
    //}
    //innerFunc();
//}

//practice question;

//what will be the output;

//let greet="hello"; // global scope;
//function changeGreet(){
  //let greet="namaste";//functional scope;
  //console.log(greet);
  //function innerGreet(){
    //console.log(greet);//lexical scope;
  //}
  //innerGreet();
//}
//console.log(greet);
//changeGreet();

//Function expressions;
let name= "vijay";
const Sum = function(a,b){
  return a+b;
}
Sum(45,45);

//higher order function;
//function multipleGreet(func, count) {
    //for (let i = 1; i <= count; i++) {
       // func();
   // }
//}

//let greet = function() {
   // console.log("hello");
//}

//multipleGreet(greet, 1000);

function oddEvenTest(request){
  if(request == "odd"){
    return function(n){
       console.log (! (n % 2 == 0));
    }

    }else if(request == "even"){
    return function(n){
        console.log(n % 2 ==0);
      }

   }else{
      console.log("wrong request");
    }
   }
   let request= "odd";

   //method;
    
   //const calculator ={
   // num :55,
    //add: function(a,b){
      //return a+b;
    //},

     //sub: function(a,b){
      //return a-b;
    //
    //mul: function(a,b){
      //return a*b;
    //},


   //};
   //method shorthand;
  const calculator ={
   
    add (a,b){
      return a+b;
    },

     sub(a,b){
      return a-b;
    },
    mul(a,b){
      return a*b;
    },
  }


  //This keyword in js;
  const student ={
    name: "Vijay kharwar",
    age :28,
    eng :95,
    math :98,
    phy: 90,
    getAvg(){
      console.log(this);
      let avg =(this.eng + this.math +this.phy)/3;
      console.log(`${this.name} got avg marks=${avg}`);
    }
  }
  function getAvg(){
    console.log(this);
  }
//Arrow functions;
const sum = (a,b) => {
  console.log(a+b);
}

const cube = (n) =>{
  return n*n*n;
}

//implicit return;
const mul = (a,b) =>(
  a*b
)

//SET time out;
//console.log("hi there");
//setTimeout(() => {
  //console.log("hello");
//} ,5000);
//console.log("welcome to");

//SetInterval;
 // console.log("Hey there");
//let id = setInterval(() => {
  //console.log("Apna collage");
//}, 2000);
//console.log(id);


//This with Arrow Function;
//const student1={
  //name: "Ajay kharwar",
  //marks: 95,
  //prop: this,//global scope
  //getName: function(){
   // console.log(this);
    //return this.name;
  //},
 // getMarks:() =>{
     //console.log(this);
   // return this.marks;

  //},
  //getInfo1: function(){
    //setTimeout(()=>{
     // console.log(this); // student1
  //}, 2000);
  //},
//getInfo2:function(){
   //setTimeout( function(){
      //console.log(this); // window
  //}, 2000);
  //},
//};

//Practice Question 1;
//write an arrow function that returns the square of a number;
const square =(n) =>{
  return n*n;
  }

//const square =(n) =>(
   //n*n
//)


//practice question 2;
//write a function that prints "hello world" 5 times intervals of 2s each;

let id = setInterval(() =>{
  console.log("Hello world");
}, 2000);
setTimeout(() =>{
  clearInterval(id);
  console.log("clear interval ran");
}, 10000);




