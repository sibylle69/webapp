import Ajax from "./ajax.js";
import myAudio from "./audio.js";
const myUI = Object.create(null);

let jsonrecipes;

//reads a response and sends a promise
const json = function (response) {
    return response.json();
};

//reads the JSON file and converts its recipes into objects
//function called by main.js
myUI.fetchrecipes = function () {
    return new Promise(function (resolve) {

        const response = window.fetch("recipeStorage.json").then(json);

        //takes the recipes array from the JSON file
        response.then(function (recipes) {
            jsonrecipes = recipes.recipes;
            resolve(jsonrecipes);

            jsonrecipes.forEach(function () {
                json().jsonrecipes.map(function (recipe) {
                    console.log(recipe.name);
                    return recipe.name;
                });
            });
        });
    });
};

let possibleRec = [];
let infridge = [];

//finds the recipes matching with a fridge
myUI.searchRecipes = function (fridge) {
    jsonrecipes.forEach(function (recipe) {
        Array.prototype.forEach.call(fridge, function (ingredient) {
            recipe.ingredients.forEach(function (recipeIngredients) {

                // if it finds one matching ingredient
                if (ingredient === recipeIngredients) {
                    if (possibleRec.includes(recipe) === false) {
                        //the recipe matches
                        possibleRec.push(recipe);
                    }
                }
            });
        });
    });
};

//function that adds an ingredient to a fridge
myUI.addToFridge = function (fridge, ingredient) {
    let newFridge = fridge;
    newFridge.push(ingredient);
    return newFridge;
};

//function called by main.js once the document is loaded
myUI.init = function () {

    //shortcut
    const el = (id) => document.getElementById(id);

    const list = el("availablerec");
    const disp_theRec = el("clickedrecipe");
    let recipe_element = document.createElement("p");
    let title = el("recipietitle");

    //displays all the recipes
    jsonrecipes.forEach(function (recipe) {
        let notFiltered_el = document.createElement("p");
        notFiltered_el.setAttribute("tabIndex", "0");
        notFiltered_el.textContent = recipe.name;
        list.appendChild(notFiltered_el);
        list.scrollIntoView();

        //click on the recipe opens it
        notFiltered_el.onclick = function () {
            myAudio.click();
            recipe_element.textContent = recipe.recipe;
            disp_theRec.appendChild(recipe_element);
            disp_theRec.scrollIntoView();
            title.textContent = recipe.name;
        };

        //makes it accessible with a keyboard
        notFiltered_el.onkeydown = function (event) {
            if (event.key === "Enter") {
                notFiltered_el.click();
            }
        };

        let tbl = el("ingredient-table");
        let rows = tbl.getElementsByTagName("td");

        //clicking on any ingredient adds it to fridge
        [...rows].forEach(function (cell) {
            cell.setAttribute("tabIndex", "0");

            cell.onclick = function () {
                myAudio.click();
                cell.setAttribute("aria-selected", "true");
                alert("✔️Ingredient successfully added to your fridge!✔️");
                return (myUI.addToFridge(infridge, cell.innerText));
            };

            //makes it accessible by keyboard
            cell.onkeydown = function (event) {
                if (event.key === "Enter") {
                    cell.click();
                }
            };
        });
    });

    const search = el("search recipes");
    const add = el("new recipe");

    //click on search button filters the recipes
    search.onclick = function () {
        myAudio.search();
        myUI.searchRecipes(infridge);

        //removes the unfiltered list
        list.innerHTML = "";
        disp_theRec.innerText = "";
        title.innerText = "";

        //displays the filtered list
        possibleRec.forEach(function (recipe) {
            let filtered_element = document.createElement("p");
            filtered_element.textContent = recipe.name;
            filtered_element.setAttribute("tabIndex", "0");
            list.appendChild(filtered_element);
            list.scrollIntoView();

            //clicking on a filtered recipe opens it
            recipe_element = document.createElement("p");
            filtered_element.onclick = function () {
                recipe_element.textContent = recipe.recipe;
                disp_theRec.appendChild(recipe_element);
                disp_theRec.scrollIntoView();
                title.textContent = recipe.name;
            };

            //makes it accessible by keyboard
            filtered_element.onkeydown = function (event) {
                if (event.key === "Enter") {
                    filtered_element.click();
                }
            };
        });
    };

    //clicking on add button to add a recipe to the JSON file
    add.onclick = function (event) {
        myAudio.send();

        //reads the input as a new recipe
        const newRecipe = prompt(
            `Please enter your recipe in this format:
            {"name": "my cake", "ingredients": ["sugar", "chocolate"],
            "recipe":"mix sugar and melted chocolate"}`
        );

        //creates a request to the server
        if (newRecipe !== "") {
            const request = {
                "message": newRecipe
            };
            //contacts the root
            const response = Ajax.query(request);
            response.then(function (object) {
                console.log(object);
            });
        }
        event.preventDefault();
    };
};

export default Object.freeze(myUI);
