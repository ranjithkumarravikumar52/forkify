import {elements} from "../models/base"; //import DOM elements

//function to get input from the input form
//provide a way to export to our global app controller index.js
export const getInput = () => elements.searchInput.value;