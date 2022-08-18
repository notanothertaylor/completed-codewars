/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/

//My solution
function makeNegative(num) {
  return num < 0 ? num : -num;
}
//Other solutions
function makeNegative(num) {
    return -Math.abs(num);
  }

//
function makeNegative(num) {
    if ( num > 0 ) {
          return -num;
      }
      else {
          return num;
      }
  }