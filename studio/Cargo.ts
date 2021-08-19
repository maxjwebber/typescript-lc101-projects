import { Payload } from "./Payload";

export class Cargo implements Payload{
    // properties and methods
    massKg: number;
    material: string;
    constructor(theMass: number,theMaterial: string)
    {
        this.massKg = theMass;
        this.material = theMaterial;
    }
 }