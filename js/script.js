document.write("<h1>Estamos executando o script.js</h1> ");
document.write("Esse script esta sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

// Comentário de uma linha
// CTRL + ;
/* 
Atalho para comentário de várias linhas
ALT + SHIFT + A
 */

// Tipagem fraca
var teste = 1;
console.log(typeof(teste));
document.write("<hr>O valor da vraiável teste é "+teste+"<hr>")
teste = 'joao'
console.log(typeof(teste));
document.write("<hr>O valor da vraiável teste é "+teste+"<hr>")
// Variável global - criada sem necessidade de declaração
nome = 'joao'
console.log(nome.toUpperCase())

// Formas de declaração de variáveis

var v1 = 5.25;
let v2 = null;
const v3 = 'teste';

console.log("Tipo da variável v1: "+typeof(v1));
console.log("Tipo da variável v2: "+typeof(v2));
console.log("Tipo da variável v3: "+typeof(v3));
console.log("Tipo da NaN: "+typeof NaN); //tipo number
console.log("Tipo do null: "+typeof null); //tipo number
console.log("Tipo da variável +Infinity: "+typeof +Infinity);
const numero = "1";
// Operadores de comparação
console.log("Testa se numero == 1: " +(numero == 1));
console.log("Testa se numero === 1: " +(numero === 1)); //testa também o tipo de dados

//Adicionar uma lista no body do HTML
var lista = ['arroz', 'feijao', 'carne', 'macarrao'];
var listaUI = document.createElement('ul');

// Acessar elementos através do DOM
var body = document.getElementsByTagName('body');

console.log(listaUI);
console.log(body);

/* alert("vamos criar uma lista agora!"); */
document.write("vamos criar uma lista agora!");
body[0].appendChild(listaUI);

for (var i = 0; i<lista.length; i++){
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUI.appendChild(liFor);
}

document.write("<hr>A <b>LISTA ACIMA</b> foi criada dinamicamente via <b>JS</b>")