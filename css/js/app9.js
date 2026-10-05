//let para1 = document.createElement("p");
//para1.innerText ="Hey i am red!";
//document.querySelector("body").append(para1);

//para1.classList.add("red")

//let h3 = document.createElement("h3");
//h3.innerText ="Hey i am blue h3!";
//document.querySelector("body").append(h3);

//h3.classList.add("blue")

//let div = document.createElement("div");
//let h1 =document.createElement("h1");
//let para2 = document.createElement("p");

//h1.innerText ="I am in a div";
//para2.innerText="ME too!";

//div.append(h1);
//div.append(para2);
//div.classList.add("box");
//document.querySelector("body").append(div);

//let btn = document.querySelector("button");
//console.dir(btn);

//btn.onclick = function(){
    //console.log("button was clicked");
//};

//let btns = document.querySelectorAll("button");
//for(btn of btns){
//    btn.addEventListener("click",sayHello);
//    btn.addEventListener("click",sayName);
//}
//function sayHello(){
//alert("Hello!");
//}
//function sayName(){
// alert("Apna college");
//}
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
  let h3 = document.querySelector("h3");
  let randomColor =getRandomColor();
  h3.innerText = randomColor;
  let div = document.querySelector("div");
  div.style.backgroundColor = randomColor;
  console.log("color updated");
});

function getRandomColor(){
    let red= Math.floor(Math.random() * 256);
    let green= Math.floor(Math.random() * 256);
    let blue= Math.floor(Math.random() * 256);


    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

