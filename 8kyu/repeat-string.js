/*Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.*/

//My solution
function repeatStr (n, s) {
    return s.repeat(n);
  }

//Other solutions
repeatStr = (n, s) => s.repeat(n)

//
function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }