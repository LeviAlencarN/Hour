function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerText = `Agora são ${hora} horas` 
    if(hora>=0 && hora<12){
        img.src = 'imgATV01/manha.jpg'
        document.body.style.background = 'rgb(64,234,6)'
    }
    else if(hora>=12 && hora <18) {
        img.src = 'imgATV01/tarde.jpg'
        document.body.style.background = 'rgb(222,57,10)'
    }
    else {
        img.src = 'imgATV01/noite.jpg'
        document.body.style.background = 'rgb(0,0,15)'
    }
}