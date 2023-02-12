import Animal from "./models/Animal.js";
import Human from "./models/Human.js";

let wolf = new Animal("Wolf", "carnivore", 5, 150);
let chicken = new Animal("Chicken", "herbivore", 7, 100);
let bear = new Animal("Bear", "omnivore", 8, 1500);
let human1 = new Human('Zarko', 'omnivore', 28, 190, 'Male', 'Zarkovski');


wolf.eat(chicken);
console.log(`Wolf instanceof Animal:`,wolf instanceof Animal);

chicken.eat(wolf);
console.log(`Chicken instanceof Animal:`,chicken instanceof Animal);

wolf.eat(bear);
wolf.eat("a piece of meat");

bear.eat(wolf)
console.log(`Bear instanceof Animal:`,bear instanceof Animal);


console.log(`human1 instanceof Animal:`,human1 instanceof Animal);
human1.talk();
  