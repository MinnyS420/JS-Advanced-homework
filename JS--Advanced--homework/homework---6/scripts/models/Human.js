export default class Human {
    constructor(name,lastName, age, size, gender) {
        this.name = name;
        this,age = age;
        this.size = size
        this.gender = gender;
        this.lastName = lastName;
    }

    talk(talking = 'III begaj meckaaa!') {
        console.log(talking);
    }
    die(causeOfDeath = 'natural dead') {
        super.die(causeOfDeath);
        this.talk = false;
    }

}
