function add7(number){
    return(number+7);
};

function multiply(num1,num2){
    return(num1*num2);
};

function capitalize(strval){
    return(String(strval).charAt(0).toUpperCase() + String(strval).slice(1));
    //string = string[0].toUpper();
};

function lastLetter(str){
    return(str.slice(-1));
};



console.log("Function add: ",add7(4));
console.log("Function mult: ",multiply(3,12));
console.log("Function Capitalize: ",capitalize("Word"));
console.log("Function Last Letter: ",lastLetter("abcd"));