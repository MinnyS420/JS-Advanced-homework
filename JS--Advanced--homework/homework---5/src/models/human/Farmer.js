import Human from "./human.js";

export default class Farmer extends Human {
    constructor(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession) {
        super(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession)

        this.workTools = ['ashof', 'lopata', 'motika', 'greblo_griblo', 'kopac'];
        this.workMachines = ['traktor', 'kombajna', 'sveShoBrci']
        this.skill = `To grow plants!`
    }
    workerSound() {
        const workAudio = new Audio('../../../assets/duckQuack.mp3')
        this.duckInterval = setInterval(() => {
            if (Math.random() > 0.9)
                workAudio.play();
        }, 200)
    }
    talk(talking = 'III guzva pa ke kasnam!') {
        if (!this.isAlive) return;

        if (this.name == 'Sarko') {
            talking = 'III guzva pa ke kasnam!'
        }
        console.log(talking);
    }
    popravaTraktor(){
        this.poprava = setInterval(()=>{
            console.log(`Poprava...`);
        },1000)
    }
    die(causeOfDeath = 'mu padna haubata od traktorot') {
        super.die(causeOfDeath);
        this.talk = false;
        clearInterval(this.duckInterval);
        clearInterval(this.poprava);
    }
}