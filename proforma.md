# Computing 2 Submission Proforma

**CID:** 01707746

## Brief
*State what you set out to acomplish with this web app.*

You feel like you have nothing in your fridge and don't have time to do grocery shopping? This WebApp is for you! Indeed, the app gives you recipes according to what you have in your fridge. Each user can add recipes to the server in order to enrich the app content. For now, there are only a few recipes stored, so in order to maximise the chance for you to find matching recipes, if you have one ingredient of a recipe, it will display it. Hopefully, when many more recipes will be stored, I will update the code so that you will need more than one matching ingredient to get a matching recipe! This is why I need you to fill in the best recipes of your Grand Mothers :) The more people add recipes, the more recipes they will be able to do with a few amount of ingredients. So, Have a Go!

## Coding
*Highlight your approach to coding in this project.*

I started coding this year and I find it really interesting especially when the code is actually useful through a fully implemented project! This module allowed me to see the direct impact of my code on the app, which motivated me to surpass myself. It was not easy to code in Javascript as this language was totally new for me, but the coding basics I got by learning Python helped me to tackle Javascript even if the structure and key principles are different (which is all the more interesting). Covering a whole project that includes both the front-end and the back-end was amazing. Being able to implement such a project was personally satisfying!

## UX/UI
*Outline the key elements of your UX/UI design.*

First, pick the ingredients you want to cook by selecting them directly on the table or by using the search tool. Once all the ingredients are added to the fridge, you can click on the "search recipes" button in order to filter the list of recipes. Clicking on a recipe title displays it on the right pane. 
Finally, try to add a recipe to make it available to anyone! You simply need to click on the "add recipe" button and write the recipe in the prompt window. It will directly add it to the server! If you want to see it on the list, you just need to refresh the page :)
!!! Be careful to follow the right format when you type your recipe !!! (however if it happened that you corrupt the JSON file, you can delete your input in recipeStorage.json).

## Data
*Explain how you structure and process your data.*

My data simply consists of a list of recipes. Those are stored in a JSON file, as text. It is then converted into an array of objects in Javascript where each object is a recipe containing a name, ingredients and instructions. The JSON file is linked to the server so that it can be read when the user searches recipes, and updated when a user adds a recipe to the server. Ajax links my front-end and my server by sending requests, while handler.js converts the input recipe taken from the server into a JSON object which allows you to update the JSON file!

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*

Using Firefox Developer tools has been incredibly useful to debug and conceptualise my code. Console.log() allowed me to read through my code step by step and see what line was bugging. It was especially useful in order to see whether my data was in a JSON or Javascript format. Moreover, the inspector helped me to visualise each section of my App individually which saved me a lot of time for styling. The accessibility inspector also helped me to identify the most subtle issues people could have using my app. Finally, property-based testing allowed me to solve a particularly subtle bug: while testing my addToFridge() function from the UI, it appeared that my test was failing because my function from the UI was returning the length of the array instead of the array itself. I was not aware of that since my code was working well, so testing brought this up and allowed me to re-write the function as expected, which finally satisfied the test.

## Best Practice
*Outline your use of software development best practices*

I have learned that in order to reach any complex goal, I need to design for the simple case first, with preferably zero configuration or parameterization, and then add complexity step by step. Also, I've started to write code defensively: thinking about what can go wrong, what will happen on invalid input, and what might fail, which helped me to catch many bugs before they happened. Moreover, property-based testing allowed to raise hidden issues in my code thanks to a wide range of inputs. The project also conforms to the "in-house coding style" by the use of Jslint, and to accessibility standards (firefox accessibility tool still raises keyboard issues, but the clickable elements are in fact accessible). Also, typing comments made the intention clearer for me as well as the reader! Finally, separating structural, styling and behavioural code helped to structure my ideas and make a consistent project! 


