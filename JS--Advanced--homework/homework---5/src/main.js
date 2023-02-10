import Horse from "./models/animal/horse.js";
import Pudlica from "./models/animal/pudlica.js";
import Sarplaninec from "./models/animal/sarplaninec.js";
import StarZenskiSarplaninec from "./models/animal/starZenskiSarplaninec.js";
import Artist from "./models/human/Artist.js";
import Farmer from "./models/human/Farmer.js";
import Human from "./models/human/human.js";
import Worker from "./models/human/Worker.js";
import Mammal from "./models/mammal.js";

// console.log('Main class');


// const horse1 = new Horse('Goce', 7, 'Male');

// // console.log(horse1);

// horse1.die();

// const sarplaninec1 = new Sarplaninec('Sarko', 5, 'Male');

// sarplaninec1.bark();

// console.log(sarplaninec1);

// const pudlica1 = new Pudlica('Kiko', 5, undefined);
// // pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.bark();
// pudlica1.die('crkni');
// pudlica1.bark('gaf gaf gaf');

// pudlica1.comeAlive();

// console.log('bark');
// pudlica1.bark()
// sarplaninec1.bark()
// console.log('bark ends');

// setTimeout(() => {
//     pudlica1.die()
// }, 10000)

// console.log(horse1);

//                           Homework part!!!!!!!!!!!!!
//                                  1
// const starZenskiSarplaninec = new StarZenskiSarplaninec('Lajka', 11);

// console.log(starZenskiSarplaninec);

// starZenskiSarplaninec.printSpecs();

//                                  2

const farmer1 = new Farmer('Lazo', 35, 'Male', 'Lazovski', 'Brown', 'Smegj', 'Light_Blue', 83, 182, 'Worker');

console.log(farmer1);
farmer1.talk();

farmer1.popravaTraktor();

function farmerDeth(){ const deth1 = setInterval(() => {
    farmer1.die();
    clearInterval(deth1);
}, 10000)}

farmerDeth();

const artist1 = new Artist('Lazo', 35, 'Male', 'Lazovski', 'Brown', 'Smegj', 'Light_Blue', 83, 182, 'Worker');

console.log(artist1);
artist1.talk();

artist1.sipuvaBoja();

function artistDeth(){ const deth1 = setInterval(() => {
    artist1.die();
    clearInterval(deth1);
}, 10000)}

artistDeth();

const worker1 = new Worker('Lazo', 35, 'Male', 'Lazovski', 'Brown', 'Smegj', 'Light_Blue', 83, 182, 'Worker');

console.log(worker1);
worker1.talk();

worker1.krsiDzid();

function workerDeth(){ const deth1 = setInterval(() => {
    worker1.die();
    clearInterval(deth1);
}, 10000)}

workerDeth();


