//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//My solution
function filter_list(l) {
    // Return a new array with the strings filtered out
    let newList = l.filter(Number.isInteger)
    return (newList)
  }

//Other solutions
function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

//
function filter_list(l) {
    return l.filter(v => typeof v == "number")
   }