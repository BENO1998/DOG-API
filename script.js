var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","dog");
input.setAttribute("placeholder","Breed Name");

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="Search";
button.addEventListener("click",foo);

let images=document.createElement("div");
images.setAttribute("id","image");


div.append(input,button,images);
document.body.append(div);

async function foo(){
    
    let res=document.getElementById("dog").value;
    var url=`https://dog.ceo/api/breed/${res}/images/random`;
    
    let result=await fetch(url);
    let result1=await result.json();
   
    console.log(result1);
    image.innerHTML=`<div class="pic"><img src="${result1.message}"</div>`;
  

}