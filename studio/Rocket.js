"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(theName, totalCapacityKg) {
        this.totalCapacityKg = totalCapacityKg;
        this.name = theName;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var index = 0; index < items.length; index++) {
            sum += items[index].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
