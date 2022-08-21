/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.*/
//My solution
function between(a, b) {
    // your code here
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
  }

//Other solutions
function between(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    
    for (var i = min, arr = []; i <= max; arr.push(i++));
      return arr;
  }