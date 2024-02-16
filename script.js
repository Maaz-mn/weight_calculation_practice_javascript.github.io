var weightInGrams = prompt("Enter the weight of chicken in grams:");
var weightInKg = weightInGrams / 1000;
var price = weightInKg*500;
// price of per KG is 500rs
document.write("You have to pay "+ price + "rs for " + weightInGrams + " grams of chicken. " )