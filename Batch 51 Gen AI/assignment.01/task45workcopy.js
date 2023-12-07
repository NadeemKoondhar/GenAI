"use strict";
class Car {
    constructor(features) {
        this.features = features;
    }
    honk() {
        console.log("Beep beep!");
    }
}
const hondaCivic = new Car({ color: "red", model: "Civic", year: 2023 });
hondaCivic.honk(); // Output: "Beep beep!"
