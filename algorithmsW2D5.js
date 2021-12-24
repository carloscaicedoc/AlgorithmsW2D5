// TWO DIMENSIONAL ARRAYS
// Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise.

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr2d, value) {
    for (var i=0; i<arr2d.length; i++){
      for (var x=0; x<arr2d[i].length; x++)
        if (arr2d[i][x] == value){
          console.log("true");
          return true;
        } 
    } 
    console.log("false");
    return false;
  } 
  
  isPresent2d(arr2d, 8);
  isPresent2d(arr2d, 0);
  isPresent2d(arr2d, 17);
  isPresent2d(arr2d, 31);
  isPresent2d(arr2d, 9);
  isPresent2d(arr2d, 46);
  isPresent2d(arr2d, 5);
  isPresent2d(arr2d, 7);
  


// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays.


function flatten(arr2d) {
    var flat = [];
    for (var i=0; i<arr2d.length; i++){
        for (var x=0; x<arr2d[i].length; x++) {
            value = arr2d[i][x];
            flat.push(value);
        }
    }
    return flat;
}

var flatarray = flatten([[2, 5, 8],[3, 6, 1],[5, 7, 7],[98, 345, 2345]])
console.log(flatarray);
