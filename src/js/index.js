import Search from "./models/Search";
import * as searchView from "./views/searchView"; //all functions
import {elements, renderTheLoader, clearTheLoader} from "./models/base"; //DOM strings, spinner

/** Global state of the object
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - liked recipes
 */
const state = {};

//event listener for search functionality
const controlSearch = async () => {
    // 1. Get the query from the view
    const query = searchView.getInput();
    console.log('query ',query);

    /*if(query) {
        // 2. create a new search object and add it to  state
        state.search = new Search(query);

        // 3. prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderTheLoader(elements.searchResults);

        // 4. search for recipes
        await state.search.getResults();

        // 5. render(log) results on UI
        // console.log(state.search.result)
        clearTheLoader();
        searchView.renderResults(state.search.result);
    }*/
};
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault(); //to prevent reload of the page when submit is clicked
    controlSearch();
});

//event handler for pagination buttons
elements.searchResultPages.addEventListener('click', event => {
    const button = event.target.closest('.btn-inline');
    console.log('event target', event.target); //to know exactly where this click has happened
    console.log('closest target', button);

    //now if we got a valid button, then let's navigate to goto page
    if(button){
        const goToPage = parseInt(button.dataset.goto, 10); //gives us the data attribute value of data-goto here, which is a string
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

