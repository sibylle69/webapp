import myUI from "./ui.js";

//waits for the DOM to be loaded
window.addEventListener("DOMContentLoaded", function () {

    //reads the JSON file and calls the init function from the UI
    myUI.fetchrecipes().then(function (recipes) {
        myUI.init(recipes);
    });
});