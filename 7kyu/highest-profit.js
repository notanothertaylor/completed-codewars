/*Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.*/
//My solution

function minMax(arr){
    let minimum = Math.min(...arr)
    let maximum = Math.max(...arr)
    let result = [minimum, maximum]
    return (result); // fix me!
  }
//Other solutions
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

//
function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  }

