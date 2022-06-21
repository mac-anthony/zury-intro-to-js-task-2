
//take the operator input
const operator = prompt('Enter operator from the following ( + ,  -,  *  or  / ): ');

//take the operand input
const num1 = parseFloat(prompt('Enter first number : '));
const num2 = parseFloat(prompt('Enter second number : '));

let result;

if (operator == "+"){
  result = num1 + num2;
  
}else if(operator == "-"){
    result = num1 - num2;
}else if(operator == "*"){
  result = num1 * num2;
}else{
  result = num1 / num2;
} 

//displaying the result
console.log(`${num1} ${operator} ${num2} = ${result}`);