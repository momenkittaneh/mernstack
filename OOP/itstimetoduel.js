class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
    target.res = target.res - this.power;
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,effect){
    super(name,cost)
    this.effect=effect;
    this.text=text;
    this.stat=stat;
    }
    todo(target){
        if (stat == "resilience"){
            target.res += this.effect;
        }
        if (stat == "power"){
            target.power += this.effect;
        }

    }
}
const RedBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const HardAlgorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3)
HardAlgorithm.todo(RedBeltNinja);
const BlackBeltNinja = new Unit("Black Belt Ninja",4,5,4);
const UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2)
UnhandledPromiseRejection.todo(RedBeltNinja)
const PairProgramming = new Effect("Pair Programming",3,"increase target's power by 2","power",2)
PairProgramming.todo(RedBeltNinja);
RedBeltNinja.attack(BlackBeltNinja);


