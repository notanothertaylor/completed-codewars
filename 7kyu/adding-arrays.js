/*Create a function that takes an array of letters, and combines them into words in a sentence.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']] */
//My solution
function arrAdder(arr) {
    let result = '';
    for(var i = 0; i< arr[0].length; i++){
      for(var j = 0; j<arr.length; j++){
        result += arr[j][i];
    }
      result +=' ';
      }
    return result.trim();
  }
//
const arrAdder = arr =>  arr[0].map((_,i)=>  arr.map((_,j)=> arr[j][i]).join('')).join(' ');