module.exports = (left, right) => {
  // Write a function that adds the left number to the right number
  // and returns it. If either of the inputs are not valid numbers
  // throw an Error
  if ((typeof left != "number") || (typeof right != "number")){
    throw Error("One of the inputs is not a number")
  }
  result = left + right
  return result 
}
