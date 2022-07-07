function parImpar(){
    var valor = parseInt(document.getElementById("valor").value);
    var tipo = (valor % 2) ? 'Impar' : 'Par';
    document.getElementById('Resultado').innerHTML = "El Número " + valor + " es " + tipo;
    return false;
        }