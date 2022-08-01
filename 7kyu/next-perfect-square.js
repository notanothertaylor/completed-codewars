DESCRIPTION:
/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.*/
// My solution
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //Figure out if sq is a perfect square
    //If it is a perfect square, square it
    //Figure out next perfect square, return it
    let squareIt = Math.sqrt(sq)
    if (Number.isInteger(squareIt)== true){
      return Math.pow(squareIt+=1, 2)
    }
    return -1;
  }
// Other solutions
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }