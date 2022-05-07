function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resp =  window.document.querySelector('div#resp')
 
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO! Verifique os dados e tente novamente.')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
 
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >=0 && idade <= 11){
                //Criança
                img.setAttribute('src','https://i.ibb.co/CKVsTSJ/1-1.png')
            }
            else if (idade <= 17){
                //adolescente (jovem)
                img.setAttribute('src','https://i.ibb.co/4WHSj0v/3-1.png')
            }
            else if (idade < 60){
                //adulto
                img.setAttribute('src','https://i.ibb.co/TmN4p4W/8.png')
            }
            else {
                //idoso
                img.setAttribute('src','https://i.ibb.co/98hFv8b/9.png')
            }
        }
     
        else if (fsex[1].checked) {
             genero = 'Feminino'
             if (idade >=0 && idade <= 11){
                 //Criança
                 img.setAttribute('src','https://i.ibb.co/5cjqjZZ/2-1.png')
             }
             else if (idade <= 17){
                 //adolescente (jovem)
                 img.setAttribute('src','https://i.ibb.co/XyssysL/4-1.png')
             }
             else if (idade < 60){
                 //adulto
                 img.setAttribute('src','https://i.ibb.co/mb2XT7F/7.png')
             }
             else {
                 //idoso
                 img.setAttribute('src','https://i.ibb.co/jW6CtfC/10.png')
             }
        }
 
        resp.style.textAlign = 'center'      
        resp.innerHTML = `Detectamos pessoa do gênero ${genero} com ${idade} anos de idade.`
        resp.appendChild(img)
    }
 }