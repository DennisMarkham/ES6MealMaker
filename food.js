//this project manifests itself solely in the console log.

// import cake from "./desserts.js";

console.log("cake");

var sandwich =
{
	bread: "white",
	cheese: "American"
}	

console.log("This is my sandwich:")
console.log (sandwich)

var meat = "roast beef"

sandwich = {...sandwich, meat}

console.log("Now my sandwich has meat:")
console.log (sandwich)


var sauce = "mayo"

sandwich = {...sandwich, sauce}

console.log("Now my sandwich has sauce:")
console.log(sandwich)

console.log("I love cheese so much, I'm going to eat it on its own:")

var {cheese} = sandwich;

console.log("Yum!  I'm eating " + cheese + " cheese!")

console.log("But does the sandwich still have roast beef?");

(sandwich.meat == "roast beef") ? console.log("Yes!") : console.log("No!")

console.log("Does the sandwich have chicken?");
(sandwich.meat == "chicken") ? console.log("Yes") : console.log("No!")


var pantry = ["nutmeg", "crackers", "peanut butter"];
console.log("In my pantry is:")
console.log(pantry)

var purchase = ["jelly", "pepper", "sugar"];
console.log("I purchased:");
console.log(purchase);

pantry = [...pantry, ...purchase]
console.log("Now my pantry has:")
console.log(pantry)

console.log("I don't like nutmeg anymore.  I'm going to throw it: ")

var [first, ...rest] = pantry

console.log(rest)