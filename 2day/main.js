const nome = prompt("Qual o seu Nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual a linguagem de programação você está estudando");

const msg = `Olá ${nome}, você tem ${idade} e ainda está estudando ${linguagem}`;
alert(msg);

const resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o numero 1 para SIM ou 2 para NÃO`);

if (resposta === "1") {
    alert("Muito Bom! Continue estudando e você terá muito sucesso.");
} 

if (resposta === "2" ){
    alert("Ahh que pena... Já tentou aprender outras linguagens");
}