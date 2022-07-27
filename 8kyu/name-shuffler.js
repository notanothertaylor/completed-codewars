// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.
// My solution
function nameShuffler(str){
    const fullName = str.split(" ");
    return [fullName[1], fullName[0]].join(" ");
  }
// other solutions
// const nameShuffler = str => str.split(' ').reverse().join(' ');
// function nameShuffler(str){
//   return str.split(' ').reverse().join(" ");
// }
