console.log("hello !");
console.log("my name vijay kharwar");
console.log("Radheshyam kharwar");

let a=10;
let b=5;
console.log("sum is:", a+b);

let e=34;
let f=25;
console.log("sub is:", e-f);

let pencilprice=10;
let erasorprice=5;
//let output="The total price is:"+(pencilprice + erasorprice)+ "Rupees.";
//let output=`The total price is: ${pencilprice + erasorprice} Rupees.`; // back ticks
//console.log("The total price is:",pencilprice + erasorprice,"Rupees.")
console.log(`The total price is: ${pencilprice + erasorprice} Rupees.`);

//Arithmetic operator
let w=10;
let z=5;
console.log(w+z);
console.log(w-z);
console.log(w * z);
console.log(w / z);
console.log(w %z);
console.log(w **z);
//unary operator
console.log(w++);
console.log(++w );

let age=18;
console.log(age>=18)

//conditional statement
let Rajkaage=23;
if(age>=18){
    console.log("you can vote");
   
     let n=34;
    console.log(5*n);
}

let firstName ="aman";
if(firstName=="aman"){
    console.log(`welcome ${firstName}`);
}

//practice question
let color="green";
//traffic light system
if(color==="red"){
    console.log("stop! light color is red");

}

 else if(color==="yellow"){
    console.log("slow light color is yellow");

}

  else if(color==="green"){
    console.log("go light color is green");

}

let marks= 80;
if(marks >=80){
   console.log("A+");
}else if(marks>=60){
    console.log("A");
}else if(marks>=30){
    console.log("B")
}else if(marks<30){
   console.log("F");
}



let month = "may";

if (month === "december") {
    console.log("winter is here");
} else if (month === "may") {
    console.log("summer is here");
}

//else statement
let Ajaykaage=24;
if(age>=18){
    console.log("you can vote");
}else{
 console.log("you can not vote");
}

let size="M";
if(size==="XL"){
    console.log("price is RS 250");

}
else if(size==="L"){
    console.log("price is RS 200");
}else if(size==="M"){
    console.log("price is RS 100");
} else{
    console.log("price is RS 50");
}

let mathmarks=32; 
if(mathmarks>=33){
 console.log("pass");
 if(mathmarks>=80){
   console.log("Grade: O");
}else{
    console.log("Grade:A");
}
    }else{
        console.log("Better Luck for next time");
    }

//Logical operators
let englishmarks=95;
if(englishmarks>=34 && englishmarks>=80){
    console.log("pass");
    console.log("+ A");
}


let scincemarks=95;
if(scincemarks>=34 || scincemarks>=80){
    console.log("pass");
    console.log("+ A");
}

let chemarks=23;
if((chemarks>34 && chemarks<= 80 )|| ! false){
    console.log("pass");
}

//practice question:A "good string" is a string that starts with the letter 'a' & has length>3 wright a program to find it a string is good or not

let str ="apple";
if(str[0] ==="a" && str.length>3){ 
    console.log("good string");
} else{
    console.log("not a good string");
}

//predict the output following code

let num=12;
if((num%3===0) &&((num+1===15) ||(num-1===11))){
    console.log("safe");
}else{
    console.log("unsafe");
}

//truthy & falsy
  let nums=-12;
  if(nums){
    console.log("nums is not equal to 0");
  }else{
    console.log("nums is equal to 0");
  }

  if(false){
    console.log("it has true value");
  }else{
    console.log("it has false value");
  }

   if(""){
    console.log("it has true value");
  }else{
    console.log("it has false value");
  }

  if(" "){
    console.log("it has true value");
  }else{
    console.log("it has false value");
  }

  
  