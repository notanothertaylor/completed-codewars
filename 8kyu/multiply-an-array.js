/*Given a non-empty array of integers, return the result of multiplying the values together in order.*/
//My solution
function grow(x){
    const initialValue = 1;
    const multiplyWithInitial = x.reduce(
      (previousValue, currentValue) => previousValue * currentValue,
      initialValue
    );
      return(multiplyWithInitial)
    }

//Other solutions
const grow = (nums) => nums.reduce((product, num) => product * num, 1);