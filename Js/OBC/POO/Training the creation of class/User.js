class User{
  constructor(fullname,email1,password1){
  this.fullname = fullname
  this.email1 = email1
  this.password1 = password1
  }
  login(email2,password2){
  if(email2 === this.email1 && password2 === this.password1){
    console.log('Login has been successful')
  }else{
    console.log('Email or password wrong')
  }
  }
}

const luan = new User('Luan Lopes da Silva','lopesluan18@outlook.com','aparecida123')
console.log(luan)
luan.login('lopesluan18@outlook.com','aparecida123')