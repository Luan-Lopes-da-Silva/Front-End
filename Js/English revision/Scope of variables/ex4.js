export default function(){
  let a = 20

  function printA(){
    let a = 30
    console.log(a)
  }
  console.log(a)
  printA();
}

//How let is the variable of scope of block first console show 20 after show 30 because first he show the variable global after show the variable in function.