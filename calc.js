let operator="";
let firstnumber="";
let secondnumber="";
function append(num){
    if(operator==""){
        firstnumber+=num;
        document.getElementById('result').value=firstnumber
    }
    else{
        secondnumber+=num;
        document.getElementById('result').value=secondnumber
    }
}
function operate(op){
    operator=op;
}

function result(){
    let res;
    switch(operator){
        case '+':
        res=parseInt(firstnumber)+parseInt(secondnumber);
        break;
        case '-':
        res=parseInt(firstnumber)-parseInt(secondnumber);
        break;
        case '*':
        res=parseInt(firstnumber)*parseInt(secondnumber);
        break;
        case '/':
        res=parseInt(firstnumber)/parseInt(secondnumber);
        break;
        case '.':
        res=parseInt(firstnumber)/parseInt(secondnumber);
        break;
    }
document.getElementById('result').value=res;
}
function clearresult(){
    operator="";
    firstnumber="";
    secondnumber="";
    document.getElementById('result').value="";}