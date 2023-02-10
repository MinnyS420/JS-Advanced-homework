import Mammal from "../mammal.js";

export default class Human extends Mammal {
    constructor(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession) {
        super(name, age, gender)

        this.lastName = lastName;
        this.profession = profession;

        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;

        this.mass = mass;
        this.height = height;

        this.hasTwoArms = true;
        this.hasTwoLegs = true;
        this.hasTwoEars = true;
        this.hasTenFingers = true;
        this.hasTenToes = true;
    }

    talk(talking = 'III guzva pa ke kasnam!') {
        if (!this.isAlive) return;

        if (this.isAlive) {
            talking = 'III guzva pa ke kasnam!'
        }
        console.log(talking);
    }
    die(causeOfDeath = 'natural dead') {
        super.die(causeOfDeath);
        this.talk = false;
    }

}