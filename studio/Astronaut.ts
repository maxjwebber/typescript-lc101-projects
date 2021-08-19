import { Payload } from "./Payload";

export class Astronaut implements Payload{
    // properties and methods
    massKg: number;
    name: string;
    constructor(theMass: number,theName: string)
    {
        this.massKg = theMass;
        this.name = theName;
    }
 }