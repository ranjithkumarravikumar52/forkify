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

/**
 *
 * @param page - current page
 * @param type - check if we are on the first page, end page or in-between; type can be 'prev' or 'next'
 */
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
`;

/**
 * Private function to render buttons for the pagination, based on the current page
 * Example:
 * If we are on page 1, it should display ONLY page 2
 * If we are not at the start or at end page, then current page should display next and previous buttons
 * If we are the end page, only previous button should be enabled
 * @param page - current page
 * @param numResults - total number of recipes or results
 * @param resultsPerPage
 *
 * How do we calculate the total number of pages?
 * Total Number of Pages = numResults / resultsPerPage
 *
 * Example: 30 results and results per page is 10, then totalNumberOfPages = 30/10 = 3;
 *
 */
const renderButtonsForPagination = (page, numResults, resultsPerPage) => {
    const pages = Math.ceil(numResults / resultsPerPage);

    if(page === 1  && pages > 1){
        //Button for next page
    }else if(page < pages){
        //Button for next and previous page
    }else if(page === pages && pages > 1){
        //Button for previous page
    }
};

/**
 * render results to UI, default recipes length in our array is 30, loop through the array and print each of them to the UI
 * @param recipes - list of recipes that we get from the API
 * @param page - current page
 * @param resultsPerPage - recipes per page
 *
 * PAGINATION example
 *
 * Assuming page numbers are 1-based and elements per page are 0-based
 * page 1: 0 - 9 elements
 * page 2: 10 - 19 elements
 * page 3 : 20 - 29 elements
 * ...
 * nth term for the series -> 0,10,20,30...n is 0 + (n-1)*10 => (n-1) * 10
 * nth term for the series -> 9,19,29,39...n is 9 + (n - 1) * 10 => (10*n - 1)
 * page n : (n - 1) * 10 -> ((10 * n) - 1)
 *
 */
export const renderResults = (recipes, page = 1, resultsPerPage = 3) => {
    const start = ((page - 1) * resultsPerPage);
    const end = ((resultsPerPage * page) - 1);

    // recipes.forEach(element => renderRecipe(element)); //similar to below LOC
    recipes.slice(start, end + 1).forEach(renderRecipe); //slice(start, end) => start is inclusive and end is exclusive, so adding +1 to end
};