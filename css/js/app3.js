// //for(let i=1; i<=10;i++){
//    // console.log(i);
// //}



// //for(let i=20; i>=1; i--){
//     //console.log(i);
// //}


//  //for(i=1; i<=15; i=i+2){
//         //console.log(i);
//     //}
//      // even number


//      //for(let i=2; i<=100; i=i+2){
//        // console.log(i);
//     // }

//    //for(i=2;i<=100;i++){
//        // if(i %2==0){
//            // console.log(i);
//        // }
//     //}

//      //odd number

//     //for(let i=1;i<=100; i=i+2){
//        // console.log(i);
//     //}
//     //for(let i=1; i<=100; i++){
//         //if(i%2!==0){
//             //console.log(i);
//         //}
//     //}

//    // even number


//    // for(let i=2; i<=10; i=i+2){
//     //console.log(i);
//    //}

//    //for(let i =2; i<=10;i++){
//     //if(i%2==0){
//         //console.log(i);
//     //}
//    //}

//    //infinite loop
//    //for (let i = 1; i <= 5; i++) {
//    // console.log(i);

// //multiplication
// // for(let i=5;i<=50;i=i+5){
//     //console.log(i);
// // }
//  //let n=prompt("Enter your number");
//  //n=parseInt(n);
//  //for(let i=n;i<=n*10;i=i+n){
//    // console.log(i);
//  //}

//  //nested  for loop;

//  //for(let i=1;=3; i++){
//    // console.log(`outer loop $(i)`);
// //for(let j= i; j<=3; j++){
//     //console.log(j);
//  // }

//  //while loop;
//   //let i=1;
//  // while(i<=5){
//    // console.log(i);
//     //i++;
//   //}

//  // let i=0;
//   //while(i<=20){
//    //console.log(i);
//   // i++;
//   //}

//  //let i=5;
//   //while(i>=1){
//    //console.log(i);
//   // i--;
//   //}

//   //const favMovie="avatar";
//   //let guess= prompt("guess my favorite movie");
//   //while((guess != favMovie) &&(guess !="quit")){
//    // guess=prompt("wrong guess.please try again");
//  // }
//   //if(guess==favMovie){
//     //console.log("congrats!!");
//   //}else{
//    // console.log("you quit");
//   //}

//    let i=1;
//   while(i<=20){
//     if(i == 3){
//       break;
//     }
//    console.log(i);
//    i++;
//   }

//Loop whit array
//let fruits=["mango", "apple", "banana", "litchi", "orange"];
//fruits.push("milk cake")
//for(let i=0;i < fruits.length;i++){
 // console.log(i,fruits[i]);
//}
//for(i=fruits.length-1; i>=0; i--){
  //console.log(i,fruits[i]);
//}

//Nested Loop
let heroes = [["Ironman","Spiderman", "thor"],["Superman","Wonder woman","flash"]];
for(let i=0;i<heroes.length;i++){
  console.log(`list # ${i}`);
  for(let j=0;j<heroes.length;j++){
    console.log(heroes[i] ,[j]);
  }
}
//for of loop;
let fruits=["mango", "apple", "banana", "litchi", "orange"];
for(fruit of fruits){
  console.log(fruit);
}
for(char of "vijay kharwar"){
  console.log(char);
}
//nested for of loop
let heroees = [["Ironman","Spiderman", "thor"],["Superman","Wonder woman","flash"]];
for(list of heroees){
  for(heroees of list){
    console.log(heroees);
  }
}


