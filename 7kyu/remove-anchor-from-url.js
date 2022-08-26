/*Complete the function/method so that it returns the url with anything after the anchor (#) removed. */
//My solution
function removeUrlAnchor(url){
    return url.split('#')[0];
  }
//Other solutions
function removeUrlAnchor(url) {
    var index = url.indexOf("#");
    return index == -1 ? url : url.substring(0, url.indexOf("#"));
  }