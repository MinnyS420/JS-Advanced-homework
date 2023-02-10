import Human from "./human.js";

export default class Worker extends Human {
    constructor(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession) {
        super(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession)

        this.workTools = ['burmasina', 'strafilica', 'brusalica', 'mengeme', 'mistrija', 'lopata', 'tokmak'];

        this.skill = `Can build a house!`
    }
    workerSound() {
        const workAudio = new Audio('../../../assets/hilta.mp3')
        this.hiltaInterval = setInterval(() => {
            if (Math.random() > 0.9)
                workerSound.play();
        }, 200)
    }
    talk(talking = 'III guzva pa ke kasnam!') {
        if (!this.isAlive) return;

        if (this.name == 'Sarko') {
            talking = 'III guzva pa ke kasnam!'
        }
        console.log(talking);
    }
    krsiDzid(){
        this.Krsiii = setInterval(()=>{
            console.log(`Krsiii...`);
        },1000)
    }
    die(causeOfDeath = 'mu padna cigla na glava') {
        super.die(causeOfDeath);
        this.talk = false;
        clearInterval(this.hiltaInterval);
        clearInterval(this.Krsiii);
    }

}