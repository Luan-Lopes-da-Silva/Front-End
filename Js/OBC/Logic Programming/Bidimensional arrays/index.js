const array = [0,1,2,3,4,5,[6,7,8,9]]
//Bidimensionals arrays is basicaly one array inside other
//See below how to acess this type of array
console.log(array[6])
console.log(array[6][3])
const array2 = ["First level",42,true,["Second level",43,false],["Third level",44,true]]
console.log(array2)
console.log(array2[0])
console.log(array2[3][0])
console.log(array2[4][0])
const array3 =[["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
               ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
               ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
              ]
//console.log(array3)
//console.log(array3[0][3])
//console.log(array3[1][3])
//console.log(array3[2][3])
//Iterate per each element of one array using for loop
for(let internalArray=0; internalArray<array3.length; internalArray++){
  for(let positions=0; positions<array3[internalArray].length; positions++){
    const element = array3[internalArray][positions]
  console.log(element)
  }
}