let a = 0
let b = a || 42
console.log({a,b})
b = a ?? 42
console.log({a,b})

//Basically it reminds of the or operator but unlike the or operator it just ignores null or undefined values ​​in this example above it returns 0 even though 0 is a false value but 0 is not undefined or null