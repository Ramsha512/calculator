function clickOnNum(num){

    var output = document.getElementById("output");
output.value += num;
}


function clearResult(){

    var output = document.getElementById("output");
output.value = "";
}

function getresult(){
    var output = document.getElementById("output");
   output.value = eval(output.value);
}




