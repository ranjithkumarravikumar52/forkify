import {elements} from "../models/base"; //import DOM elements

//function to get input from the input form
//provide a way to export to our global app controller index.js
export const getInput = () => elements.searchInput.value;

//render a recipe to UI - Single responsibility principle
//no export - private function
const renderRecipe = (recipe) => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;

    //render it to the DOM
    //if we use beforeEnd the results will be in ascending order - 1,2,3,4... <---WE WANT THIS -->
    //if we use afterBegin the results will be in descending order - ....4,3,2,1.
    elements.searchResultList.insertAdjacentHTML('beforeend', markup);

};

//render results to UI
export const renderResults = (recipes) => {
    //default recipes length in our array is 30
    //loop through the array and print each of them to the UI
    // recipes.forEach(element => renderRecipe(element));
    recipes.forEach(renderRecipe);
};