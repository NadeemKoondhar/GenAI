"use strict";
/*Task # 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

*/
function describe_city(city_name = `Karachi`, country = `Pakistan`) {
    console.log(`\n${city_name} city is in the country of ${country}.`);
}
describe_city();
describe_city(`Hyderabad`, `Pakistan`);
describe_city(`New Delhi`, `India`);
describe_city(`Makkah`, `Saudi Arabia`);
