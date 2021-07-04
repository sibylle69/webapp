import myUI from "./ui.js";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;

//debugger
describe("Mocha", function () {
    it("Correctly initialises Mocha", function () {
    });

    it("Correctly initialises FastCheck", function () {
        fc.assert(fc.property(fc.integer(), () => true));
    });
});

const ingredients = [
    "apples", "leeks", "milk", "flour", "bacon", "egg plants", "cheddar",
    "pastry", "beef", "cheries", "tomatoes", "cream", "rice", "salmon",
    "peachs", "onions", "whipped cream", "polenta", "pork", "lemons",
    "asparagus", "ice cream", "chesnuts", "chicken fillet", "strawberries",
    "cauliflowers", "cottage cheese", "almonds", "chicken wings", "rasberries",
    "peas", "soft cheese", "pasta", "beef", "cantaloupe", "broccolis",
    "sour cream", "potatoes", "meat balls", "pears", "pepers", "fresh cream",
    "eggs", "sausages", "limes", "carrots", "margarine", "beans", "sausages",
    "kiwi berries", "spinachs", "ricotta", "cereals", ", pork ribs",
    "pineapple", "mushrooms", "condensed milk", "chocolate chunks",
    "duck breast", "coconut", "cucumbers", "whole milk", "baking soda", "ham",
    "figs", "parsley", "pudding", "brown sugar", "minced meat", "blackberries",
    "corn", "permesan cheese", "sugar", "sardines", "mangos", "avocados",
    "ghee", "vanilla", "tuna", "watermelon", "beets", "coconut milk", "walnuts",
    "meat kabobs", "apricots", "endives", "feta", "pecan pieces", "crab",
    "limes", "basil", "skimmed milk", "bread crumbs", "white ham", "oranges",
    "egg"
];

//defines the constants
let arbIngredient = fc.constantFrom(...ingredients);
let arbFridge = fc.array(arbIngredient, 1, ingredients.length);

//test
describe("Fridge Updates", function () {
    it(
        "Given a fridge, " +
        "after attempting to add a new ingredient to the fridge " +
        "it updates the original fridge.",

        function () {
            fc.assert(fc.property(
                //takes two arbitraries
                arbFridge,
                arbIngredient,

                //tests the function addToFridge() from the UI
                function (fridge, ingredient) {
                    let newFridge = myUI.addToFridge(fridge, ingredient);
                    let expected = fridge;
                    expected.push(ingredient);
                    return newFridge === expected;
                }
            ), {verbose: true});
        }
    );
});