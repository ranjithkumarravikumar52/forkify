import Search from "./models/Search";
import * as searchView from "./views/searchView"; //all functions
import {elements} from "./models/base"; //DOM strings

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

        // 4. search for recipes
        await state.search.getResults();

        // 5. render(log) results on UI
        // console.log(state.search.result)
        searchView.renderResults(state.search.result);
    }*/
};
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault(); //to prevent reload of the page when submit is clicked
    controlSearch();
});

