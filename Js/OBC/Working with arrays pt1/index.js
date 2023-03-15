const arr = ['Luan','Jose','Jackson','Fagner','Sielso','Jair','Yuri']
console.log(arr)


//Push
//Add elements on end of the array and return the new lenght of the array.
arr.push("Bruno")
console.log(arr)

//Unshift
//Add elements on start of the array and return the new lenght of the array.
arr.unshift("João")
console.log(arr)

//Pop 
//Remove last element of array and return the same element which was removed.
arr.pop()
console.log(arr)
//In this exemple Bruno was removed of the array

//Shift
//Remove first element of array and return the same element which was removed.
arr.shift()
console.log(arr)
//In this exemple João was removed of the array

//Search per one element
//Includes
//Search if one element exist in one array and return true or false
let includes = arr.includes("Luan")
console.log(includes)

//IndexOf
//Return o index of the element researched in array
let index = arr.indexOf("Luan") 
console.log(index)

//Slice
//Slice one array based in two arguments, one index which indicates the start of slice and other index which indicates the end of slice this second index is optional.
const halfOfArray = arr.slice(0,4)
console.log(halfOfArray)
const secondHalf = arr.slice(-4)
console.log(secondHalf)
//In negative values he slice of back for front
//In exemple above he slice of the last element of the array.
