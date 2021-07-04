import fs from "fs";

//handles the data received from the server
const handler = function (req, res) {

    //loads the JSON file and parse it
    const myJson = JSON.parse(fs.readFileSync("./static/recipeStorage.json"));

    //pushes the new recipe into the JSON file
    myJson.recipes.push(JSON.parse(req.body.message));
    fs.writeFileSync(
        "./static/recipeStorage.json",
        JSON.stringify(myJson),

        function (err) {
            console.log(err);
            res.send("ok");
        }
    );
};

export default Object.freeze(handler);