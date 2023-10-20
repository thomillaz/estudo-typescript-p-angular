// interfaces (type x interface)
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2{
    readonly id: number | string;
    name: string;
}

// readonly não deixa alterar a propriedade no console.log

const bot: robot = {
    id: 1,
    name: 'megaman',
};

const bot2: robot2 = {
    id: 2,
    name: 'megamente',
};

console.log(bot);
console.log(bot2);