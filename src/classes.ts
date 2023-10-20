// classes
/* 
    data modifiers:
    public
    private
    protected
*/
class Character{
    private name?: string;
    strenght: number;
    skill: number;

    constructor(name: string, strenght: number, skill: number){
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strenght} points`);
    }
}

class Magician extends Character{
    magicPoints: number;
    constructor(
        name: string, 
        strength: number, 
        skill: number, 
        magicPoints: number,
        ){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Mago', 9, 30, 100);
p1.skill = 12;