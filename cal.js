let num = document.getElementById("number");
var output = '';
function addlist(){
    if(num.value !=''){

        output += `<li> ${num.value} </li> `;
    }
    document.getElementById("numberList").innerHTML = output;
}