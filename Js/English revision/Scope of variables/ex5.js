export default function(){
  let x = 10

  function printA(){
    let x = 20
    console.log(x)
  }
  console.log(x)
  printA();
}

//How let is the variable of scope of block first console show 20 after show 30 because first he show the variable global after show the variable in function.