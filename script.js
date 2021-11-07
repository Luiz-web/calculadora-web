function calcular(tipo, valor) {
    if(tipo === 'acao') {

        if(valor == 'c') {
            //limpart o resultado(id resultado)
            document.getElementById('resultado').value = ''
        }
        
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor
        }

        if(valor === '=') {
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }

        if(valor === '%') {
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo / 100
        }

    } else if(tipo === 'valor'){
        document.getElementById('resultado').value +=  valor
    }
}