import {elements} from "../models/base"; //import DOM elements

//function to get input from the input form
//provide a way to export to our global app controller index.js
export const getInput = () => elements.searchInput.value;

//to clear input field after query is submitted
export const clearInput = () => { //curly braces will remove that implict return functionality
    elements.searchInput.value = '';
};

//clear results
export const clearResults = () => {
    elements.searchResultList.innerHTML = '';
};

/**
 *
 * @param title - recipe title
 * @param limit - max length allowed before we start to wrap, default is 17
 *
 * Example:
 *
 * Pasta with tomato and spinach
 *
 * Accumulator : 0, in each iteration check, if accumulator + current <= limit, then we push the keyword into an newTitle
 *
 * 1st iteration : acc = 0, curr = 5 (pasta.length); 0+5 <= 17, yes, newTitle = [pasta]
 * update the acc; acc += curr => acc = 5;
 *
 * 2nd iteration : acc = 5; curr = 4 (with.length); 5+4 <= 17, yes, newTitle = [pasta, with]
 * update acc; acc += curr => acc = 9;
 *
 * 3rd iteration : acc = 9; curr = 6 (tomato.length); 9+6 <= 17, yes, newTitle = [pasta, with, tomato]
 * update acc; acc += curr => acc = 15;
 *
 * 4th iteration : acc = 15; curr = 3 (and.length); 15+3 <= 17, NO, continue iterations till we come out of the array
 *
 *
 */
const limitRecipeTitle = (title, limit = 17) => {
    if(title.length > limit){
        //resultant array
        const newTitle = [];

        //get the whole title and split into words based on empty spaces
        title.split(" ").reduce((accumulator, current) => { //reduce is a callback function that happens on each element of the array
            if(accumulator + current.length <= limit){
                newTitle.push(current);
            }
            // accumulator += current.length;
            return accumulator + current.length; //returning any value gets assigned to the accumulator

        }, 0); //0 -> initial accumulator value

        //return result
        return `${newTitle.join(' ')} ...`;
    }
    return title;
};

//render a recipe to UI - Single responsibility principle
//no export - private function
const renderRecipe = (recipe) => {
    const markup = `
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${limitRecipeTitle(recipe.title)}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
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