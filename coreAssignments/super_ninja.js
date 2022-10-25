class Ninja{
    constructor(name, health, speed = 3, strength =3 ){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName(){
        console.log(this.name);
        return this
    }
    showStats(){
        console.log("health " + this.health , "speed " + this.speed , "str "  + this.strength)
        return this
    }

    drinkSake(){
        this.health +=10;
        console.log("updated health " + this.health)
        return this
    }
}
// inheritance
class Sensei extends Ninja{
    constructor(name, health, wisdom){
        super(name, health, 10, 10)
        this.wisdom = wisdom
    }

    speakWisdom(){
        console.log("Wisdom here from superSensei ninja")
    }
}

const superSensei = new Sensei("superSensei", "200", "10")
console.log(superSensei)

superSensei.speakWisdom();
superSensei.showStats();

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();

ninja1.showStats();

ninja1.drinkSake();


