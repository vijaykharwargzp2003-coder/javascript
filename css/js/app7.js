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
      //result+=Str[i
    //}
    //return result;

  //}

  //Function scope;
  let Sum=54;//Global scope
  function calSum(a,b){
    let Sum= a+b; //Function scope
    console.log(Sum);
  }
  calSum(3,6);
   console.log(Sum);
