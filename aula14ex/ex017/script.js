function tabuada(){
    var numero = document.getElementById("nbNumero");
    var tabuada = document.getElementById("seltab");

    if (numero.value.length == 0) {
        window.alert("Por favor, digite um número");
    } else {
        var num = Number(numero.value);
        tabuada.innerHTML = '';
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement("option");
            item.innerText = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tabuada.appendChild(item);
        }
    }
    
}