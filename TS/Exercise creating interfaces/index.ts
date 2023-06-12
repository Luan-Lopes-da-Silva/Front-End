const btn = document.querySelector('button')
const users = []

function createInfos(User:User){
const userContainer = document.createElement('div')
userContainer.classList.add('user-container')
const userId = document.createElement('span')
userId.textContent = `Id: ${User.id}`
userId.classList.add('id')
const userLogin = document.createElement('span')
userLogin.textContent = `Login: ${User.login}`
userLogin.classList.add('login')
const userName = document.createElement('span')
userName.textContent = `Nome: ${User.name}`
userName.classList.add('name')
const userBio = document.createElement('span')
userBio.textContent = `Bio: ${User.bio}`
userBio.classList.add('bio')
const userRepos = document.createElement('span')
userRepos.textContent = `Repositorios: ${User.public_repos}`
userRepos.classList.add('repos')
const userRepo = document.createElement('a')
userRepo.textContent = 'Link repositorio'
userRepo.href = User.repos_url
userRepo.classList.add('repo')
userContainer.append(userId,userLogin,userName,userBio,userRepos,userRepo)
document.querySelector('.container-users').append(userContainer)
}

interface User{
id:number
login:string
name:string
bio:string
public_repos:number
repos_url:string
}

async function getCountries(ev: { preventDefault: () => void }){
  ev.preventDefault()
  const user = document.getElementById('user') as HTMLInputElement
  let value = user.value
  const response = await fetch(`https://api.github.com/users/${value}`)
  const countries = await response.json()
  const User : User = {
    id:countries.id,
    login:countries.login,
    name:countries.name,
    bio:countries.bio,
    public_repos: countries.public_repos,
    repos_url: countries.repos_url 
  }
 if(response.status === 200){
 createInfos(User)
 }else{
 alert(countries.message) 
 }
}

btn.addEventListener('click',getCountries)