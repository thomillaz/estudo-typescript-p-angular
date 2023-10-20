"use strict";
// variáveis
// tipos primitivos: boolean, number, string
// da forma seguinte, só será atribuído o valo de acordo com o tipo setado
let ligado = false;
let nome = "Kamilla";
let idade = 25;
let altura = 1.64;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipo abrangentes: any, void
let retorno;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "Kamilla",
    cidade: "POA",
    idade: 25,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
// arrays
let dados = ["Kamilla", "Carol", "Carla"];
let dados2 = ["Kamilla", "Carol", "Carla"];
let infos = ["Kamilla", 25, "Carol", 30];
//tuplas (precisa ser inserido na ordem estabelecida)
let bolet = ["agua conta", 199.90, 3245678];
//arrays métodos
dados.pop();
//Datas
let aniversario = new Date("2023-10-02 05:00");
console.log(aniversario.toString());
