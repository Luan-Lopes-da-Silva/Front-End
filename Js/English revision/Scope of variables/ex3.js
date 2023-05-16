export default function(){
  let a = 20

  function printA(){
    let a;
    console.log(a)
  }
  console.log(a)
  printA();
}

//How let is the variable of scope of block first console show 20 after show undefined because first he show the variable global after show the variable in function.