class Card{
    constructor(name,cost){
        this.name= name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target-=this.power;
    }
}
class Effect extends Card{
    constructor(name,cost,text,state,magnitude){
        super(name,cost);
        this.text=text;
        this.state =state;
        this.magnitude= magnitude;
    }
    play(target){
        if (target instanceof Unit){
            if(this.state=="power"){
                target.power += this.magnitude;
                console.log("power" +target.power);
            }else{
                target.res+=this.magnitude;
                console.log("Res" +target.res);
            }
        }else{
            throw new Error( "Target must be a unit!" );
        }
    }
}
let Unit1 = new Unit("Red Belt Ninja",3,3,4);
let Unit2= new Unit("Black Belt Ninja",4,5,4);
let Card1 = new Effect("Hard Algorithm",2, "increase target's resilience by 3","resilience",3);
let Card2 = new Effect("Unhandled Promise Rejection",1, "reduce target's resilience by 2","resilience",-2);
let Card3 = new Effect("Pair Programming",3, "increase target's power by 2","power",2);
Card1.play(Unit1);
Card2.play(Unit1);
Card3.play(Unit2);
