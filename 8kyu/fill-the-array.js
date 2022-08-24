/*We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.*/
//My solution
function fillArr(n){
    var newArr = []
    for(var i=0; i < n; i++){
        newArr.push(i)
    }
    return newArr
}
//Other solutions
