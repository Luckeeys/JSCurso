function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <= 12) {
        //BOM DIA!
        img.src = 'Manha.png'
        document.body.style.background = '#7e966d';
    } else if (hora > 12 && hora < 18){
        //BOA TARDE!
        img.src = 'Tarde.png'
        document.body.style.background = '#714731';
    } else {
        //BOA NOITE!
        img.src = 'Noite.png'
        document.body.style.background = '#093771';
    }
}
