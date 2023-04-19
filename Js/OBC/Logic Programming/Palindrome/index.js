let word = prompt("Input the word")
let newString = ''
let newString2 = ''
for(let index = word.length-1; index>=0; index--){
 newString += word[index]
} 
for(let index = 0; index<word.length; index++){
  newString2 += word[index]
}


if(newString === newString2){
  console.log(newString+' is a palindrome')
 }else{
  console.log(newString + " not is a palindrome " + newString2)
 }