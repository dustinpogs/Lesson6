// Do not change any of the function names

//Example 1:
function returnFirst(arr) {
  // return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  // return the last item of the array
    return arr.pop();
}

function getArrayLength(arr) {
  // return the length of the array
    return (arr.length);
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  for (var i=0;i<arr.length;i++) {
      arr[i] +=1;}
  return (arr);
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  // return the array
  var x=[];
  var x=arr.push(item);
    return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  var x=[];
  var x=arr.unshift(item);
    return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  
  var x = words.join(" ");

  return x;
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  var x=[];
  x=arr.includes(item);
     return x;

}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
    var value = numbers.reduce(function(a, b){
        return (a+b);
} ); return value; 
}



function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var total = 0
  for (var x = 0; x < testScores.length; x++){
    total = total + testScores[x];
  }
  average = (total/testScores.length);
  return average;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer

return Math.max.apply(Math, numbers);

}

function multiplyArguments() {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it

 if (arguments.length===0){ return 0;}
 else { var z=1;
      for (var y=0; y<arguments.length;y++){
     z= z*arguments[y];

   }
   return z;
 }

}
// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};