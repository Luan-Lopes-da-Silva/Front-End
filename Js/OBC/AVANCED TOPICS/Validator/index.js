function verifyEmail(emailString){
if(emailString.match(/.{2,}(?<=)@(?=)\w{2,}\.(?=)\w{2,}/g)){
  console.log('Email valida')
}else{
  const err = new Error('Email Invalido')
  throw err
}
}

function verifyPassword(password){
if(
  password.length<8
  ||!password.match(/[a-z]/)
  ||!password.match(/[A-Z]/)
  ||!password.match(/[0-9]/)
  ||!password.match(/[^a-zA-Z0-9\s]/)
  ){
  const err = new Error('Senha Invalida')
  throw err
  }else{
  console.log('Senha valida')
  }
}

verifyEmail('lulamolusculo@2009hotmail.com')
verifyPassword('Ap@recida123')