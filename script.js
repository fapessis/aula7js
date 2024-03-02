
// const contarVogais = (palavra) => {


//     let contaVogais = 0

//     const vogais = "aeiouáâãàéêíóôõú"


//     for (letra of palavra.toLowerCase()){
//         if (vogais.includes(letra)){
//             contaVogais++
//         }
//     }
//     return contaVogais
// }

// const palavra = prompt("Digite uma palavra")
// alert(contarVogais(palavra))


function elevarNumero(numero, callback) {
    const resultado = callback(numero);
    return resultado;
}

// Exemplo de função de callback para converter Celsius para Fahrenheit
function quadradoDoNumero(numero) {
    return  (numero ** 2);
}

// Exemplo de função de callback para converter Celsius para Fahrenheit
function cuboDoNumero(numero) {
    return  (numero ** 3);
}

// Teste da função com as duas funções de callback
const myNumero = Number(prompt("Digite um número: "))

const resultadoFahrenheit = converterTemperatura(temperaturaCelsius, converterParaFahrenheit);
const resultadoKelvin = converterTemperatura(temperaturaCelsius, converterParaKelvin);

alert(`o ${myNumero} elevado ao quadrado é: ${elevarNumero(myNumero,quadradoDoNumero)}`);
alert(`o ${myNumero} elevado ao cubo é: ${elevarNumero(myNumero,cuboDoNumero)}`);