// capturar evento submit do formulario

const form = document.querySelector('#form');

form.addEventListener('submit', function (e){
e.preventDefault();
const inputPeso = e.target.querySelector('#peso');
const inputAltura = e.target.querySelector('#altura');

// acima declara uma const no id do input

// abaixo pega o valor digitado no input no id
const peso = Number(inputPeso.value);
const altura = Number(inputAltura.value);
// console.log(peso, altura);
});

function criaP () {//função cria "p" paragrafo
    const p = document.createElement('p');
    return p;
}

function setResultado (msg) { // função para exibir resultado no html
    const resultado = document.querySelector('#resultado');//cria const para indicar o id ou class no html
    resultado.innerHTML = msg; //mostra
}





















// function calculoImc () {

//     const form = document.querySelector('.form');
//     const resultado = document.querySelector('.resultado');

//     const resultadoImc = [];

//     function recebeForm () {
//     const peso = form.querySelector('.peso');
//     const altura = form.querySelector('.altura');

//     entrada.push ({
//     peso: peso.value,
//     altura: altura.value
// })
// console.log(resultadoImc);

// resultado.innerHTML = `<p>Seu IMC é Peso: ${peso.value} </br> Altura: ${altura.value}  </br></br> ** Cadastrado com sucesso **</p>`;
//     }
    


// }

// calculoImc();

// ---------------------------------------------------


// dicas 


