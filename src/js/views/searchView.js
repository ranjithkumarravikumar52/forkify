import {elements} from "../models/base"; //import DOM elements

//function to get input from the input form
//provide a way to export to our global app controller index.js
export const getInput = () => elements.searchInput.value;

//render a recipe to UI - Single responsibility principle
//no export - private function
const renderRecipe = (recipe) => {
    const markup = `
        <li>
            <a class="results__link results__link--active" href="#23456">
                <figure class="results__fig">
                    <img src="img/test-1.jpg" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">Pasta with Tomato ...</h4>
                    <p class="results__author">The Pioneer Woman</p>
                </div>
            </a>
        </li>
    `;

};

//render results to UI
export const renderResults = (recipes) => {
    //default recipes length in our array is 30
    //loop through the array and print each of them to the UI
    // recipes.forEach(element => renderRecipe(element));
    recipes.forEach(renderRecipe);
};