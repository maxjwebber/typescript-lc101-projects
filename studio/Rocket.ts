import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[];
    astronauts: Astronaut[];

    constructor(theName: string,totalCapacityKg: number)
    {
        this.totalCapacityKg = totalCapacityKg;
        this.name = theName;
        this.cargoItems = [];
        this.astronauts = [];
    }
    sumMass( items: Payload[] ): number
    {
        let sum: number = 0;
        for (let index = 0; index < items.length; index++) {
            sum += items[index].massKg;
        }
        return sum;
    }
    currentMassKg(): number
    {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    canAdd(item: Payload): boolean
    {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg
    }
    addCargo(cargo: Cargo): boolean
    {
        if (this.canAdd(cargo))
        {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    }
    addAstronaut(astronaut: Astronaut): boolean
    {
        if (this.canAdd(astronaut))
        {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    }
 }