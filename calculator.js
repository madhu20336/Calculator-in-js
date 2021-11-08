//  getnumber

function Get_number(number){
    var result = document.getElementById("input")
    result.value += (number)
}
// getresult

function result(){
    var result = document.getElementById("input")
    result.value = eval(result.value)
}


// clear

function clear_containt(){
    var result = document.getElementById("input")
    result.value = "";
}


// clear single digit

function deletChr(){
    var Number = document.getElementById("input")
    var remove = Number.value;
    remove = remove.slice(0,-1);     
    // remove last character from a string
    Number.value = remove
}
