function adicionar() {
    var numeros = [];
    var num = document.getElementById("txtNumber");
    var lista = document.getElementById("lista");

    if (num.value.length == 0){
        window.alert('Por favor digite um número para prosseguir');
    } else if (num.value < 1 || num.value > 100) {
        window.alert('Por favor digite um numero entre 1 e 100');
    } else {
        numeros.push(num.value);
        var item = document.createElement("PaineldeNumeros");
        item.innerText = `Valor ${numeros[numeros.length-1]} adicionado`;
        lista.appendChild(tabela);
    }

    return numeros;
}

console.log(adicionar());
