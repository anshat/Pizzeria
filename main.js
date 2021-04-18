pizza_array=[];
function displayPizza(){
    pizza_1=document.getElementById("pizza_1").value;
    pizza_2=document.getElementById("pizza_2").value;
    pizza_3=document.getElementById("pizza_3").value;
    pizza_4=document.getElementById("pizza_4").value;
    pizza_5=document.getElementById("pizza_5").value;
    pizza_array.push(pizza_1);
    pizza_array.push(pizza_2);
    pizza_array.push(pizza_3);
    pizza_array.push(pizza_4);
    pizza_array.push(pizza_5);
    document.getElementById("ans").innerHTML=pizza_array;
}