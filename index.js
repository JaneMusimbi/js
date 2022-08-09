// num1

var background= document.body.style.backgroundColor="silver"
// num2
var colors=document.getElementById("title")
.style.color= "green"
// num3
var fruits=document.querySelectorAll("h3");
fruits.forEach(item=>
    item.innerHTML=item.textContent.toUpperCase()
    )
// num4
var Fruits2=document.createElement("li")
Fruits2.innerHTML="apples"
var fruits2=document.querySelector("#fruList").appendChild(Fruits2)
// num5
var  vegetable=document.createElement("li")
vegetable.innerHTML="Berries"
var vegetable= document.querySelector("#vegList").appendChild(vegetable)
