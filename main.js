cart=0;
qty="";
type="";
function next()
{
    window.location="index2.html";
}

function add1()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("jackfruit").value;
alert("Jackfruit "+qty);
}

function add2()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("mithai").value;
alert("Jackfruit Mithai "+qty);
}

function add3()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("oil").value;
alert("Coconut Oil "+qty);
}

function add4()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("barfi").value;
alert("Coconut Barfi "+qty);
}

function add5()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("mango").value;
type=document.getElementById("mango_t").value;
alert("Mango "+ type  + qty);
}

function add6()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("coconut").value;
alert("Coconut  "+qty);
}

function add7()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("varatti").value;
alert("Mango Varatti  "+qty);
}

function add8()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("sapota").value;
alert("Sapota  "+qty);
}

function add9()
{
cart=cart+1;
document.getElementById("cart_items").innerHTML=cart;
qty=document.getElementById("guava").value;
alert("Guava "+qty);
}

