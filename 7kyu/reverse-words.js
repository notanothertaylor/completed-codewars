//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
//Example
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"
//My solution
function reverseWords(str) {
    // Go for it
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
  }
//Other solutions
function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }  
