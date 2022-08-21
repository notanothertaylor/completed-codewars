/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.*/

//My solution
function past(h, m, s){
    h = h * 3600000
    m = m * 60000
    s = s * 1000
     return h+m+s
   }

//Other solutions
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }