export default class Animal {
    constructor(
        name,
        type,
        age,
        size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(input) {
        if (input instanceof Animal) {
            if (this.type === "herbivore") {
                console.log(`The ${this.name} is a herbivore and doesn't eat other animals.`);
            } else {
                if (this.size * 2 <= input.size) {
                    console.log(`The ${this.name} tried to eat the ${input.name} but it was too big and strong.`);
                } else {
                    input.isEaten = true;
                    console.log(`The ${this.name} ate the ${input.name}.`);
                }
            }
        } else {
            console.log(`The ${this.name} is eating ${input}.`);
        }
    }
}
