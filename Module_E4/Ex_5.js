class Appliances {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn()
    {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    getPowerUsed()
    {
        return this.isPlugged ? this.power : 0;
    }
}

const lampa = new Appliances('lampa', 100);
const pc = new Appliances('pc', 200);
const fridge = new Appliances('fridge', 250)

console.log(lampa.getPowerUsed() + pc.getPowerUsed() + fridge.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + pc.getPowerUsed() + fridge.getPowerUsed());

pc.plugIn();
console.log(lampa.getPowerUsed() + pc.getPowerUsed() + fridge.getPowerUsed());

fridge.plugIn();
console.log(lampa.getPowerUsed() + pc.getPowerUsed() + fridge.getPowerUsed())