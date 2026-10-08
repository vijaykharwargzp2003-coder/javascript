// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(  li of lis){
// li.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
//  });
// }


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click",function(){
let item =document.createElement("li");
item.innerText = input.value;

let delBtn = document.createElement("button");
delBtn.innerText ="Delete";
delBtn.classList.add("delete");
item.appendChild(delBtn);
ul.appendChild(item);
input.value ="";
});

ul.addEventListener("click",function(event){
if(event.target.nodeName =="BUTTON"){
    let listItem =event.target.parentElement;
    listItem.remove();
    console.log("deleted");
}
});