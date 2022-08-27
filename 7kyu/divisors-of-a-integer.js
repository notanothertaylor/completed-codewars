/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000. */

//My solution
function getDivisorsCnt(n){
    if (n === 1) {
        return 1;
    }
    var divisors = 2;
    var mod = 2;
    while (mod * mod <= n) {
        if (n % mod === 0) {
            if (mod * mod < n) {
                divisors += 2;
            } 
            else {
                divisors += 1; 
            }
        }
        mod++;
    }
    return divisors;
}
//Other solutions
function getDivisorsCnt(n) {
    for (var d = 0, i = n; i > 0; i--) {
      if (n % i == 0) d++;
    }
    
    return d;
  }
//
function getDivisorsCnt(n) {
    var cnt = 1;
    for (var i = 0; i <= n / 2; ++i)
      if (n % i == 0)
        ++cnt;
    return cnt;
  }
//
function getDivisorsCnt(n) {
    var div = 0;
    for(var i = 1; i <= n; i++) if(n % i == 0) div++;
    return div;
  }