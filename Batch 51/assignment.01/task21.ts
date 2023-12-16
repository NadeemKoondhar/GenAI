/*Task # 21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

class city {
  cityName: string;
  cityProvince: string;
  cityDist: number;
  cityPopu: number;
  
  constructor(cityName: string, cityProvince: string, cityDist: number, cityPopu: number) { 
    this.cityName = cityName;
    this.cityProvince = cityProvince;
    this.cityDist = cityDist;
    this.cityPopu = cityPopu;
  }
}

const cities: city[] = [
  new city ("Hyderabad", "Sindh", 165, 2500000),
  new city ("Sukkur", "Sindh", 500, 250000),
  new city ("Rahimyar Khan", "Panjab", 650, 300000),
  new city ("Multan", "Panjab", 900, 1500000),
  new city ("Lahore", "Panjab", 1200, 5000000),
  new city ("Islamabad", "Panjab", 1500, 2500000),
];

for (const city of cities) {
  console.log(`\nThe city of ${city.cityName} is situated in the province of ${city.cityProvince} in Pakistan.\nIt is located ${city.cityDist} KMs from the city of Karachi. \n${city.cityName} has a population of ${city.cityPopu} people.`);
  
}
