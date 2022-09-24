function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var anoNasc = document.getElementById('txtAnoNasc');
    var res = document.getElementById('res');
    if (anoNasc.value.length == 0 || anoNasc.value > ano) {
        window.alert('[ERRO] Valor inputado invalido tente novamente');
    } else {
        var sexo = document.getElementsByName('radSex');
        var idade = ano - Number(anoNasc.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'HomemCriança.png');
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'HomemAdolescente.png');
            } else if (idade < 30){
                //Jovem Adulto
                img.setAttribute('src', 'HomemJovemAdulto.png');
            } else if (idade < 65){
                //Adulto
                img.setAttribute('src', 'HomemAdulto.png');
            } else {
                //idoso
                img.setAttribute('src', 'HomemIdoso.png');
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src', 'MulherCriança.png');
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src', 'MulherAdolescente.png');
            } else if (idade < 30){
                //Jovem Adulto
                img.setAttribute('src', 'MulherJovemAdulta.png');
            } else if (idade < 65){
                //Adulto
                img.setAttribute('src', 'MulherAdulta.png');
            } else {
                //idoso
                img.setAttribute('src', 'MulherIdosa.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img);
    }

}