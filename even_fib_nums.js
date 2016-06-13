/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

var newArr = [1, 2];

//building the array
function _sumFibs( maxFibValue ) {
 for(var h = 0; newArr[newArr.length - 1] < maxFibValue; h++){
  newArr.push(newArr[newArr.length - 2] + newArr[newArr.length - 1]);
  }

  var sum = 0;

  // do your work here
  //iterates thru the array, checks if each value is even, and, if it is, adds to the sum
  for(var i = 0; newArr[i] <= maxFibValue; i++){
    if(newArr[i] % 2 === 0){
      sum = sum + newArr[i];
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  newArr = [1, 2];
  for(var h = 0; newArr[newArr.length - 1] < maxFibValue; h++){
  newArr.push(newArr[newArr.length - 2] + newArr[newArr.length - 1]);
  }

  //define your base case, validate your input

  //do your work here

  return newArr[newArr.length - 2];
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};