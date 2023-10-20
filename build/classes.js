"use strict";
// classes
/*
    data modifiers:
    public
    private
    protected
*/
class Character {
    constructor(name, strenght, skill) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strenght} points`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character('Ryu', 10, 98);
const p2 = new Magician('Mago', 9, 30, 100);
p1.skill = 12;
