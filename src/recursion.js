//1.
const countingSheep = function(sheepNum) {
    if (sheepNum === 0) {
      return 'All the sheep jumped over the fence.'
    }
    return `${sheepNum}: Another sheep jumped over the fence. ` + countingSheep(sheepNum - 1)  
  }
  
  console.log(countingSheep(15))

//.2
const powerCalculator = function(base, exponent) {
  if (exponent === 0) {
    return 1
  }
  if (exponent === 1) {
    return base * powerCalculator(base, (exponent - 1))
  }
  if (exponent < 0) {
    return `exponent should be >= 0`
  }
}

//.3
const reverseString = function(string) {
  if(string.length === 1) {
    return string[0]
  }
  return(string.charAt(string.length - 1) + reverseString(string.slice(0, -1)))
  
}
console.log(reverseString('Connor'))

//.4
const nThTriangle = function(num) {
  if (num === 1) {
    return num
  }
  return num + nThTriangle(num - 1)
}
console.log(nThTriangle(5))

//.5
const stringSplit = function(string) {
  return 
}

//.6
const fibonacci = function(num){

  if (num === 2){return [1, 1]}
 
 let fibArray = fibonacci(num - 1)
 fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2])
 return fibArray
}

console.log(fibonacci(10))

//.7 
const factorialOf = function(num) {
  if(num === 1) {
    return num
  }
    return (num-1) * factorialOf(num - 1)
}

//.8

const 
