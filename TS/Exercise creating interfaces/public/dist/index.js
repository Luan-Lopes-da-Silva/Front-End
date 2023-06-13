const btn = document.querySelector('button');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const users = [];
function createInfos(User) {
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');
    const userName = document.createElement('span');
    userName.textContent = `Nome do portifolio: ${User.name}`;
    userName.classList.add('name');
    const userDescription = document.createElement('span');
    userDescription.textContent = `Descrição ${User.description}`;
    userDescription.classList.add('description');
    const userFork = document.createElement('span');
    userFork.textContent = `Forks: ${User.fork}`;
    const userStargazers = document.createElement('span');
    userStargazers.textContent = `Stargazers: ${User.stargazers_count}`;
    userContainer.append(userName, userDescription, userFork, userStargazers);
    document.querySelector('.container-users').append(userContainer);
}
function createBasicInfos(User) {
    document.querySelector('.container-users').previousElementSibling.innerHTML = `<h2>Usuarios cadastrados</h2>`;
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');
    const userId = document.createElement('span');
    userId.textContent = `ID: ${User.id}`;
    const userLogin = document.createElement('span');
    userLogin.textContent = `Login: ${User.login}`;
    const userBio = document.createElement('span');
    userBio.textContent = `Bio: ${User.bio}`;
    userBio.classList.add('bio');
    const userPublicRepos = document.createElement('span');
    userPublicRepos.textContent = `Repositorios publicados: ${User.public_repos}`;
    const repos_url = document.createElement('a');
    repos_url.textContent = 'Link';
    repos_url.href = `${User.repos_url}`;
    userContainer.append(userId, userLogin, userBio, userPublicRepos, repos_url);
    document.querySelector('.container-users').append(userContainer);
}
async function getUsers(ev) {
    ev.preventDefault();
    const user = document.getElementById('user');
    let value = user.value;
    const response = await fetch(`https://api.github.com/users/${value}`);
    const userInfo = await response.json();
    const User = {
        id: userInfo.id,
        login: userInfo.login,
        name: userInfo.name,
        bio: userInfo.bio,
        public_repos: userInfo.public_repos,
        repos_url: userInfo.repos_url
    };
    if (response.status === 200) {
        alert('Usuario armazenado no banco de dados');
        users.push(User);
    }
    else {
        alert(userInfo.message);
    }
}
async function findUser(ev) {
    ev.preventDefault();
    document.querySelector('.container-users').previousElementSibling.innerHTML = `<h2>Infos do Usuario</h2>`;
    const user = document.getElementById('user2');
    let value = user.value;
    const find = users.find((user => user.login === value));
    if (find) {
        const response = await fetch(find.repos_url);
        const userFindInfo = await response.json();
        userFindInfo.forEach((user) => {
            const User = {
                name: user.name,
                description: user.description,
                fork: user.fork,
                stargazers_count: user.stargazers_count
            };
            createInfos(User);
        });
    }
    else {
        alert('Usuario não encontrado no banco de dados');
    }
}
function showUsers() {
    if (users.length > 0) {
        users.forEach((user) => {
            createBasicInfos(user);
        });
        sumRepos();
    }
    else {
        alert('Sem usuarios cadastrados');
    }
}
function sumRepos() {
    const totalOfRepos = users.reduce(function (accumulatedValue, user) {
        return accumulatedValue + user.public_repos;
    }, 0);
    console.log(totalOfRepos);
}

function showTopFive() {
    const topFive = users.slice().sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
  
    let message = 'Top 5 usuários com mais repositórios públicos:\n'
  
    topFive.forEach((user, index) => {
      message += `\n${index + 1} - ${user.login}: ${user.public_repos} repositórios`
    })
  
    alert(message)
  }
btn.addEventListener('click', getUsers);
btn2.addEventListener('click', findUser);
btn3.addEventListener('click', showUsers);
