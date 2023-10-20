//funções
function addNumber(x: number, y: number):number {
    return x + y;
}
let soma: number = addNumber(4, 7);
console.log(soma);


function addToHello(name: string):string{
    return `Hello ${name}`;
}
console.log(addToHello('Kamilla'));


function CallToPhone(phone: number | string): number | string{
    return phone;
}
console.log(CallToPhone(11122334455));


async function getDatabase(id: number): Promise<string> {
    return 'kamilla';
}