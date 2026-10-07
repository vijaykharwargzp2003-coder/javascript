 //let p = document.querySelector("p");
 //p.addEventListener("click", function(){
 // console.log("para was clicked");
 //});

//  let btn = document.querySelector("button");
//  let h1 = document.querySelector("p");
//  let h3 = document.querySelector("h1");
//  let p = document.querySelector("h3");

//  function changeColor(){
//     console.log(this);
//  this.style.backgroundColor = "blue";
//  }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

 //let btn = document.querySelector("button");
//  btn.addEventListener("click", function(event){
//   console.log(event);
//   console.log("button clicked");
//  });


//  btn.addEventListener("dblclick", function(event){
//   console.log(event);
//    console.log("button clicked");
//  });

//let input = document.querySelector("input");

// input.addEventListener("keydown", function(event){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
// console.log("key was pressed");
// });

// input.addEventListener("keyup", function(){
// console.log("key was released");
// });
// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event){
//    console.log("code = ",event.code); // ArrowUp(U), ArrowDown(D),  ArrowLeft(L), ArrowRight(R)
//    if(event.code == "KeyU"){
//     console.log("character moves up");
//    }else if(event.code == "KeyD"){
//     console.log("character moves down");
//    }else if(event.code == "KeyL"){
//     console.log("character moves left");
//    }else if(event.code == "KeyR"){
//     console.log("character moves right");
//    }

// });

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form);

    let user = this.elements[0];
    let pass = this.elements[1];

    console.log(user.value);
    console.log(pass.value);
   alert(`Hi ${user.value},your password is set to ${pass.value}`);
 });