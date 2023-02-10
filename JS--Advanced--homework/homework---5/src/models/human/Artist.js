import Human from "./human.js"

export default class Artist extends Human {
    constructor(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession) {
        super(name, age, gender, lastName, hairColor, skinColor, eyeColor, mass, height, profession)

        this.workTools = ['cetki', 'molivi', 'gumi', 'boici', 'flomasteri'];
        this.skill = `art skill`
    }
    workerSound() {
        const workAudio = new Audio('../../../assets/splash.mp3')
        this.dropInterval = setInterval(() => {
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
    sipuvaBoja(){
        this.sipuva = setInterval(()=>{
            console.log(`sipuva...`);
        },1000)
    }
    die(causeOfDeath = 'se udavi u boja') {
        super.die(causeOfDeath);
        this.talk = false;
        clearInterval(this.dropInterval);
        clearInterval(this.sipuva);
    }
}