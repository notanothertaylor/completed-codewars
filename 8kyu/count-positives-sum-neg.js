/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/

//My solution
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
    return [];
  
  var positive = 0;
  var negative = 0;
  
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }
  
  return [positive, negative];
}

//Other solutions
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    }, [0, 0]);
  }