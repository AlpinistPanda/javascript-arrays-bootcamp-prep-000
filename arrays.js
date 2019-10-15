var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];


function  addElementToBeginningOfArray(array, element) {
  var myArray = (element, ...array);
  return myArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

console.log(chocolateBars)