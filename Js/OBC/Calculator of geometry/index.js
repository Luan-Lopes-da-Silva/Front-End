let interativeMenu = ''
let base = ''
let height = ''
let side = ''
let pi = 3.14
let minorBase = ''
let biggerBase = ''
let radius = ''
do{
  interativeMenu=prompt('Calculator of geometry\n a)Area of triangle\n b)Area of rectangle\n c)Area of square\n d)Area of trapeze\n e)Area of circle\n f)Exit')

  switch(interativeMenu){
  case 'a':
  alert('You choice the calculator of area of triangle\nThe formula for if calculate is base*height/2')
  base = prompt('Base')
  height = prompt('Height')
  function areaOfTriangle(){
  alert('The area of triangle is ' + (base*height)/2)
  }
  areaOfTriangle();
  break
  case 'b':
  alert('You choice the calculator of area of rectangle\nThe formula for if calculate is base*height')
  base = prompt('Base')
  height = prompt('Height')
  function areaOfRectangle(){
  alert('The area of rectangle is ' + (base*height))
  }
  areaOfRectangle();
  break
  case 'c':
  alert('You choice the calculator of area of square\nThe formula for if calculate is side*side')
  side = prompt('How sides the square have')
  function areaOfSquare(){
  alert('The area of square is ' + (side*side))
  }
  areaOfSquare();
  break
  case 'd':
  alert('You choice the calculator of area of trapeze\nThe formula for if calculate is (bigger base + minor base)*height/2')
  biggerBase =  parseFloat(prompt('What is the size of the bigger base'))
  minorBase = parseFloat(prompt('What is the size of the minor base'))
  height = prompt('What is the height of trapeze')
  function areaOfTrapeze(){
  alert('The area of trapeze is ' + (biggerBase+minorBase)*height/2)
  }
  areaOfTrapeze();
  break
  case 'e':
  alert('You choice the calculator of area of circle\nThe formula for if calculate is pi*radius²')
  radius = parseFloat(prompt('What is the radius of circle'))
  function areaOfCircle(){
  alert('The area of circle is ' + (pi*radius*radius))
  }
  areaOfCircle();
  break
  case 'f':
  alert('Finishing')
  }
}while(interativeMenu!=='f')
