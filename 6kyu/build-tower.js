/*Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
] */
//My solution
function towerBuilder(nFloors) {
    var tower = [];
  for (var i = 0; i < nFloors; i++) {
  tower.push(" ".repeat(nFloors - i - 1)
  + "*".repeat((i * 2)+ 1)
  + " ".repeat(nFloors - i - 1))
  }
  return tower;
  }
//Other solutions
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }