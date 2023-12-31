/*Task # 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.

*/

function city_country(city_name: string = `Lahore`, country_name: string = `Pakistan`){
  console.log(`\n${city_name}, ${country_name}.`);
  
}

city_country()
city_country(`Hyderabad`, `Pakistan`)
city_country(`New Delhi`, `India`)
city_country(`Makkah`, `Saudi Arabia`)
