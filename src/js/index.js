import string from './models/Search'; //we don't mention the file extension, omit .js
console.log(`importing string : ${string}`);

//importing multiple functions and variable
// import {add as a, multiply as m, ID} from "./views/searchView";
import * as searchView from "./views/searchView";
console.log(`Using imported functions add : ${searchView.add(3, 4)}, multiply : ${searchView.multiply(3, 4)} and ID : ${searchView.ID}`);

