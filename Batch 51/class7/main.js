// export const a = "Hamzah"
let hamzahOrder = {
    food: `Chicken`
};
let ocashaOrder = {
    food: `Biryani`,
    drink: `Coke`,
};
let bilalOrder = {
    food: `Biryani`,
    drink: `Coke`,
    sweet: `Rasmalai`,
};
hamzahOrder = bilalOrder; // not throwing the error as ocashaorder has an additional order item
console.log(hamzahOrder);
export {};
// bilalOrder = hamzahOrder
// console.log(ocashaOrder);
