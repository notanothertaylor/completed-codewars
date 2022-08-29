/*Given an array of integers, return a new array with each value doubled.*/
//My solution
function maps(x){
    let result = x.map(x => x*2);
    return result
  }
//Other solutions
function maps(x){
    return x.map(n => n * 2);
  }

//
maps = x => x.map(e => e * 2);