console.log('Javascript carregado');
function validaCPF(cpf) {
    if(cpf.length != 11){
        return false;
    }
    else{
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        var soma = 0;
        for(var i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if(resultado != digitos.charAt(0)){
            return false;
        }

        numeros = cpf.substring(0, 10);
        soma = 0;
        for(var i = 11; i > 1; i--){
            soma += numeros.charAt(11 - i) * i;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
        if(resultado != digitos.charAt(1)){
            return false;
        }
        return true;
    }
}
function validacao() {
    console.log('Iniciando validação');
    var cpf = document.getElementById('cpf').value;
    var resultado = validaCPF(cpf);
    if (resultado) {
        document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    } else {
        document.getElementById('success').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
}