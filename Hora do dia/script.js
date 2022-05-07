let msg = window.document.getElementById('msg');
let img = window.document.getElementById('img');
let box = window.document.getElementById('box')
let data = new Date ();
let hora = data.getHours();
let min = data.getMinutes();

msg.innerHTML=`São ${hora} horas e ${min} minutos`

if(hora>=6 && hora<=12){
img.setAttribute('src','https://i.ibb.co/jWc52ks/3.png');
document.body.style.background='yellow';
}

else if (hora>=13 && hora<=19){
img.setAttribute('src', 'https://i.ibb.co/B4SHkd7/2.png'); 
document.body.style.background='blue';
}else{
img.setAttribute('src','https://i.ibb.co/NF2qrvb/1.png');   
document.body.style.background='black';
document.body.style.color='white'
box.style.backgroundColor='blue'

}


