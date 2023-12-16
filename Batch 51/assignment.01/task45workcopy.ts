interface CarFeatures {
    color: string;
    model: string;
    year: number;
  }
  
  class Car {
    constructor(public features: CarFeatures) {}
  
    honk(): void {
      console.log("Beep beep!");
    }
  }
  
  const hondaCivic: Car = new Car({ color: "red", model: "Civic", year: 2023 });
  hondaCivic.honk(); // Output: "Beep beep!"
  