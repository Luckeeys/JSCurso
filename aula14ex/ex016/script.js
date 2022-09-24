function contar(){
    var txtInicio = document.getElementById('nbInicio');
    var txtFim = document.getElementById('nbFim');
    var txtPasso = document.getElementById('nbPasso');  
    var res = document.getElementById('res');
    var contagem = '';

    var Inicio = Number(txtInicio.value);
    var Fim = Number(txtFim.value);
    var Passo = Number(txtPasso.value);

    if(Passo <= 0){
       window.alert('Passo Invalido, Considerando PASSO 1');
       Passo = 1
    }

    if (Inicio.length == 0 || Fim.length == 0 || Passo.length == 0){
      res.innerHTML = 'Impossível contar!' 
      //window.alert('[ERRO] Faltam dados!');
    }  else {
      res.innerHTML = 'Contando: <br>';
      //Contagem crescente
      if(Inicio < Fim){
         for (var i = Inicio; i <= Fim; i += Passo) {
            res.innerHTML += i + '\u{1F449} ';
         }
      //Contagem decrescente
      } else {
         for (var i = Inicio; i >= Fim; i -= Passo) {
            res.innerHTML += i + '\u{1F449} ';
         }   
      }
      res.innerHTML += '\u{1F3C1}'
    }
}
