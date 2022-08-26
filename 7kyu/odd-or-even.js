/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

 */
//My solution
function oddOrEven(array) {
    initialValue= 0
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue, initialValue
  );
  return (sumWithInitial%2 == 0) ? 'even' : 'odd';
    
  }
//Other solutions
function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }

//
function oddOrEven(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
    {result+=array[i];}
    if (result%2 == 0)
    {return "even";}
    else{return "odd";}
  }

//
const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';