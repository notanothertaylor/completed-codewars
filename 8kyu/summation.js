/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. */
//My solution
function summation(num) {
    return num * (num + 1) / 2
  }
//
var summation = function (num) {
    let result = 0;
    for (var i = 1; i <= num; i++) {
      result += i;
    }
    
    return result;
  }
//
const summation = n => n * (n + 1) / 2;