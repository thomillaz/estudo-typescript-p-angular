// variáveis
// tipos primitivos: boolean, number, string

// da forma seguinte, só será atribuído o valo de acordo com o tipo setado
let ligado:boolean = false;
let nome:string = "Kamilla";
let idade:number = 25;
let altura:number = 1.64;

// tipos especiais: null, undefined
let nulo:null = null;
let indefinido:undefined = undefined;

// tipo abrangentes: any, void
let retorno:void;
let retornoView:any = false;

//objeto - sem previsibilidade
let produto:object = {
    name: "Kamilla",
    cidade: "POA",
    idade: 25,
};
//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

// arrays
let dados:string[] = ["Kamilla", "Carol", "Carla"];
let dados2: Array<string> = ["Kamilla", "Carol", "Carla"];

let infos:(string | number)[] = ["Kamilla", 25, "Carol", 30];

//tuplas (precisa ser inserido na ordem estabelecida)
let bolet:[string, number, number] = ["agua conta", 199.90, 3245678];

//arrays métodos
dados.pop();

//Datas
let aniversario:Date = new Date("2023-10-02 05:00");
console.log(aniversario.toString());