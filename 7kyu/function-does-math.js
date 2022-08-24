/*Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".*/
//My solution
function arithmetic(a, b, operator){
    if(operator === 'add'){
      return a+b
    }else if(operator === 'subtract'){
      return a-b
    }else if(operator === 'multiply'){
      return a*b
    }else{
      return a/b
    }
  }
//Solutions without if statements
function arithmetic(a, b, operator){
    switch(operator) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
    }
  }
//
function arithmetic(a, b, operator){
    //your code here!
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
  }